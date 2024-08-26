somme : int = 0
l = [5,8,7,2]
min1:int= l[0]
min2:int= l[1]
for i in range (2,len(l)) :
    if l[i] < min1 :
        if min1 < min2 :
            min2 = min1
        min1 = l[i]
    else :
        if l[i] < min2 :
            min2 = l[i]
somme = min1 + min2
print(somme)