# a={1:10,2:20,3:30,4:40,5:50}
# for i in a:
#     print(i,a[i])


# i=10
# while i>=1:
#     # i=i+1
#     print(i)
#     i=i-1

num=int(input("enter a number "))
i=0
a={}
while i<num:
    # a={}
    name=(input("enter a name "))
    age=int(input("enter a age "))
    while i<len(name):
        a.update({name:age})
        i=i+1
        break;
print(a)

