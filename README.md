# calculator
#
# Performs simple mathematic operations and displays result to 3 decimal places. Can also change the sign of a number and return number as a percent. 
#
# Basic logic works by maintaining array of 3 values: [number, operand, number]. Once the array is full, if the next input is an operand or equals sign, 
# the calculation function will trigger and reset the first value of the array to the result. Further operations can then be performed on that result 
# without having to reset the entire calculator. The numbers were stored as strings, then converted to numbers to perform the mathematical operations, 
# then converted back to strings. 
#
# Further improvements could be made for error handling (preventing input of multiple decimals in one number) as well as rounding/display of digits.  
