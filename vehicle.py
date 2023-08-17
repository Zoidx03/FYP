import cv2 as cv
import numpy as np
from functions import centerHandler

MIN_WIDTH_RECT = 80
MIN_HEIGHT_RECT = 80
OFFSET = 6  # Allowable error between pixels

# Web Camera:
cap = cv.VideoCapture('./video/video.mp4')

# Line position:
linePos = 550

# Initialize Subtractor:
algo = cv.createBackgroundSubtractorMOG2(detectShadows=True)
detect = []
count = 0

while True:
    ret, frame1 = cap.read()
    bgr2gray = cv.cvtColor(frame1, cv.COLOR_BGR2GRAY)
    gaussBlur = cv.GaussianBlur(bgr2gray, (3, 3), 5)

    # Applying on each frame:
    imgSub = algo.apply(gaussBlur)
    dilate = cv.dilate(imgSub, np.ones((5, 5), np.uint8))
    kernel = cv.getStructuringElement(cv.MORPH_ELLIPSE, (5, 5))
    dilateMorph = cv.morphologyEx(dilate, cv.MORPH_CLOSE, kernel)
    dilateMorph = cv.morphologyEx(dilateMorph, cv.MORPH_CLOSE, kernel)
    counter, h = cv.findContours(dilateMorph, cv.RETR_TREE, cv.CHAIN_APPROX_SIMPLE)
    cv.line(frame1, (25, linePos), (1250, linePos), (0, 0, 255), 2)  # Drawing the line

    new_detect = []  # Create a new list to store updated detections

    for (i, c) in enumerate(counter):
        (x, y, w, h) = cv.boundingRect(c)
        validate = (w >= MIN_WIDTH_RECT) and (h >= MIN_HEIGHT_RECT)
        if not validate:
            continue

        cv.rectangle(frame1, (x, y), (x + w, y + h), (0, 255, 0), 2)  # Drawing the rectangle

        center = centerHandler(x, y, w, h)
        detect.append(center)
        cv.circle(frame1, center, 4, (0, 0, 255), -1)

        for (x, y) in detect:
            if y < linePos + OFFSET and y > linePos - OFFSET:
                count += 1

        if y < linePos + OFFSET and y > linePos - OFFSET:
            cv.line(frame1, (25, linePos), (1250, linePos), (255, 127, 0), 2)  # Redrawing the line after it gets crossed by a vehicle
        else:
            new_detect.append(center)  # Add the center to the new_detect list if the line is not crossed

    detect = new_detect  # Update the detect list with the new_detect list

    cv.putText(frame1, f"Vehicle Counter = {count}", (450, 70), cv.FONT_HERSHEY_PLAIN, 2, (0, 0, 255), 3)

    # cv.imshow('Detecter', dilateMorph)
    cv.imshow('Video', frame1)
    if cv.waitKey(1) == 13:  # 13 means Enter key
        break

cv.destroyAllWindows()
cap.release()
