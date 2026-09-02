# Enter your code here. Read input from STDIN. Print output to STDOUT
def isPossible(n, arr):
  res = []
  for l, sts in arr:
    isR = False
    isB = False
    canDo= "YES"
    for i in range(int(l)):
      isR = True if sts[i] == "R" else isR
      isB = True if sts[i] == "B" else isB
      if sts[i] == "W" or i == int(l)-1:
        if not isB and not isR:
          continue
        elif not isB or not isR:
          canDo = "NO"
          break
        isB = False
        isR = False
    res.append(canDo)
  return "\n".join(res)

def main():
  import sys, re
  input = sys.stdin.read().strip()
  data = re.split(r"\s+",input)
  n = int(data[0])
  arr = [[data[i], data[i+1]] for i in range(1,n*2,+2)]
  res = isPossible(n, arr)
  print(res)

if __name__ == "__main__":
  main()