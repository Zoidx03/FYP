# FUNCTIONS:
import cv2
from cv2 import INTER_AREA
import numpy as np
from constants.constants import *

def center_handle(x,y,w,h):
    x1= int(w/2)
    y1= int(h/2)
    cx = x+x1
    cy = y+y1      
    return cx,cy

def rescale(frame, fixed_width, fixed_height):
    dimension = (fixed_width, fixed_height)

    # Define the sharpening kernel
    sharpening_kernel = np.array([[0, -1, 0],
                                  [-1,  5, -1],
                                  [0, -1, 0]])
    
    sharpened_frame = cv2.filter2D(frame, -1, sharpening_kernel)

    return cv2.resize(sharpened_frame, dimension, interpolation=INTER_AREA)