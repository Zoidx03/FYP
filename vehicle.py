import cv2
import numpy as np

#starting webcamera

cap = cv2.VideoCapture('video.mp4')

#counter Line Position 

count_line_position = 550
min_width_rec = 80
min_height_rec = 80

#initializing Algorithm 
algo = cv2.bgsegm.createBackgroundSubtractorMOG()

def center_handle(x,y,w,h):
    x1= int(w/2)
    y1= int(h/2)
    cx = x+x1
    cy = y+y1      
    return cx,cy

detect = []
offset = 6 #allowable error between pixel
counter = 0

while True:
    ret,frame1= cap.read()
    gray = cv2.cvtColor(frame1,cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray,(3,3),5)
    
    #applying on the video
    
    img_subs = algo.apply(blur)
    dilate = cv2.dilate(img_subs,np.ones((5,5)))
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(5,5))
    dilatada = cv2.morphologyEx(dilate,cv2.MORPH_CLOSE, kernel)
    dilatada = cv2.morphologyEx(dilatada,cv2.MORPH_CLOSE, kernel)
    counterbox,h =cv2.findContours(dilatada, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    cv2.line(frame1, (25,count_line_position), (1200, count_line_position), (255, 127, 0), 3)



    for (i,c) in enumerate(counterbox):
        (x,y,w,h) = cv2.boundingRect(c) 
        validate_counter = (w>=min_width_rec) and (h>=min_height_rec)
        if not validate_counter:
            continue
        
        cv2.rectangle(frame1,(x,y),(x+w,y+h),(0,255,0))
        cv2.putText(frame1, "Vehicle : "+ str(counter),(x, y-20), cv2.FONT_HERSHEY_TRIPLEX,1,(255,244,00),2)


 
        center = center_handle(x,y,w,h)
        detect.append(center)
        cv2.circle(frame1,center,4,(0,0,255),-1)

        for(x,y) in detect:
            if y<(count_line_position + offset) and y>(count_line_position - offset):
                counter+=1
                cv2.line(frame1, (25,count_line_position), (1200, count_line_position), (170, 255, 0), 3)
                detect.remove((x,y))
                print("Vehicle Counter: " +str(counter) )
    
    cv2.putText(frame1, "Vehicle Counter : "+ str(counter),(450,70), cv2.FONT_HERSHEY_SCRIPT_SIMPLEX,1,(0,0,255),2)
 
    cv2.imshow('Video Orignal',frame1)
    if cv2.waitKey(1) == 13:
        break

cv2.destroyAllWindows()
cap.release()

