# Enter your code here. Read input from STDIN. Print output to STDOUT
def kthUniqueStr(n, k, arr):
  obj = {}
  st = []
  for a in arr:
    if a not in obj:
      st.append(a)
    obj[a] = obj.get(a, 0) + 1

  res = []
  for key in st:
    if obj.get(key, -1) == 1:
      res.append(key)
  return res[k-1] if len(res) >= k else -1
  
def main():
  import sys, re
  input = sys.stdin.read().strip()
  data = re.split(r"\s+",input)
  n, k = int(data[0]), int(data[-1])
  arr = data[1:-1]
  res = kthUniqueStr(n, k, arr)
  print(res)

if __name__ == "__main__":
  main()