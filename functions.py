# FUNCTIONS:
import cv2
from cv2 import INTER_AREA

def center_handle(x,y,w,h):
    x1= int(w/2)
    y1= int(h/2)
    cx = x+x1
    cy = y+y1      
    return cx,cy

def rescale(frame, fixed_width, fixed_height):
    dimension = (fixed_width, fixed_height)
    return cv2.resize(frame, dimension, interpolation=INTER_AREA)