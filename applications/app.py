# Birinchi Dars Drawing a Shape

# print("   /|")
# print("  / |")
# print(" /  |")
# print("/___|")



# Ikkinchi Dars Variables and Data Types

from turtle import *
color('blue', 'red')
begin_fill()
while True:
    forward(64)
    right(100)
    if abs(pos()) < 1:
        break
end_fill()
done()
