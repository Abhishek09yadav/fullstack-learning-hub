x= 'hello'
y = 'Hello'
# print("status",x==y)          

# print(ord('a'))

# print('z' > 'a') # prints true
# print( not(True and False) ) #it prints true 
# print("L3", not True or False)

# shallow copy
# x = [4, True, 'hi']
# y = x[:]
# x[0] = 'hello'
# print(x, y)

# reverse
# for i in range(10,0,-1):
#   print(i)

# k=0
# while k < 10:
#   print(k)
#   k+=1

# num = (1,2,3,4,5,6,7,8,9)
# print(num[2:7:])


# set - unordered
# setExample = set()
# setExample = {7,8,999,9,9,1,2,2,2,2,2, 3,4,6}

# print(setExample)
# # checks if element exists
# print(77 in setExample)


## dictonary

# dictonary  = dict()
# dictonary = {"key1": 1,"key2":200 }
# print(dictonary.keys())
# print(dictonary.values())
# print(type(list(dictonary.values())))
# for key,value in dictonary.items():
#   print(key,value)

# x= [x for x in range(0,5)]
# print(x)

# print([[0 for i in range(5) ] for x in range(7)])


# functions

# def fun1(a,b):
  # print("a",a,"b",b)
  # return a + b, a/b, a*b
# r1,*rest = fun1(5,6)
# print("r1",r1,"rest",rest)
# print(fun1(5,6))

# try: 
#   x= 7/0
# except Exception as e:
#   print(e)

# x  = lambda x,y: x+y
# print(x(3,4))