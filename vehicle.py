import cv2
import numpy as np
from constants.constants import *
from functions import *

#starting webcamera
cap = cv2.VideoCapture('video/video2.mp4')

#getting the size of the video:
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

#initializing Algorithm 
algo = cv2.bgsegm.createBackgroundSubtractorMOG()

detect = []
offset = 6 #allowable error between pixel
counter = 0

print("Vehicle detection and counting in process....")
while True:
    ret,frame1 = cap.read()
    
    #if the frame isn't the correct size, we resize it:
    if width != FIXED_VIDEO_WIDTH or height != FIXED_VIDEO_HEIGHT:
        frame1 = rescale(frame1, FIXED_VIDEO_WIDTH, FIXED_VIDEO_HEIGHT)
        COUNT_LINE_POSITION = 720 // 2

    gray = cv2.cvtColor(frame1,cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray,(3,3),5)
    
    #applying on the video
    
    img_subs = algo.apply(blur)
    dilate = cv2.dilate(img_subs,np.ones((5,5)))
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(5,5))
    dilatada = cv2.morphologyEx(dilate,cv2.MORPH_CLOSE, kernel)
    dilatada = cv2.morphologyEx(dilatada,cv2.MORPH_CLOSE, kernel)
    counterbox,h =cv2.findContours(dilatada, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    cv2.line(frame1, (0,COUNT_LINE_POSITION), (1400, COUNT_LINE_POSITION), (255, 127, 0), 3)


    for (i,c) in enumerate(counterbox):
        (x,y,w,h) = cv2.boundingRect(c) 
        validate_counter = (w>=MIN_WIDTH_REC) and (h>=MIN_HEIGHT_REC)
        if not validate_counter:
            continue
        
        cv2.rectangle(frame1,(x,y),(x+w,y+h),(0,255,0))
        cv2.putText(frame1, "Vehicle : "+ str(counter),(x, y-20), cv2.FONT_HERSHEY_TRIPLEX,1,(255,244,00),2)


 
        center = center_handle(x,y,w,h)
        detect.append(center)
        cv2.circle(frame1,center,4,(0,0,255),-1)

        for(x,y) in detect:
            if y<(COUNT_LINE_POSITION + offset) and y>(COUNT_LINE_POSITION - offset):
                counter+=1
                cv2.line(frame1, (0,COUNT_LINE_POSITION), (1400, COUNT_LINE_POSITION), (170, 255, 0), 3)
                detect.remove((x,y))
                # print("Vehicle Counter: " +str(counter) )
    
    cv2.putText(frame1, "Vehicle Counter : " + str(counter),(450,70), cv2.FONT_HERSHEY_SCRIPT_SIMPLEX,1,(0,0,255),2)
 
    cv2.imshow('Video', frame1)
    if cv2.waitKey(1) == 13:
        break

print("Total number of vehicles that passed: ", counter)

cv2.destroyAllWindows()
cap.release()

