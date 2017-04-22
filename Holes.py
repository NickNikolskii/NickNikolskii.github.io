from math import sqrt
def froll(b, roll):
    br = []
    if roll > 0:
        for i in range(-roll, n - roll):
            br.append(b[i])
    else:
        for i in range(-roll, n):
            br.append(b[i])
        for i in range(-roll):
            br.append(b[i])
    return br


n, l, k = map(int, input().split())
if k > 0:
    a = list(map(int, input().split()))
x = []
y = []
for i in range(n):
    x1, y1 = map(int, input().split())
    x.append(x1)
    y.append(y1)
xn = froll(x, -1)
yn = froll(y, -1)
D = []
for i in range(n):
    D.append(((xn[i] - x[i]) ** 2 + (yn[i] - y[i]) ** 2) ** 0.5)
#print(x, y)
#print(xn, yn, D)
m = [True for i in range(n)]
j = 0
for i in range(n):
    if j < k:
        if i == a[j] - 1:
            m[i] = False
            j += 1
#print(m)
#nm = []
#for i in range(n):
#    nm.append(~m[i])
minDefect = 10**15
for i in range(-n + 1, n):
    cD = froll(D, i)
    cm = m.copy()
    cm = froll(cm, i)
    dl = l
    dOpen = 0
    for i in range(n):
        dl -= cD[i]
        if dl >= 0:
            cm[i] = True
        else:
            if cm[i] == False:
                cm[i] = True
                dOpen -= dl
            break
    defect = 0
    for i in range(n):
        if cm[i] == False:
            cm[i] = True
            defect += cD[i]
    defect += dOpen
    if defect < minDefect:
        minDefect = defect
print(minDefect)