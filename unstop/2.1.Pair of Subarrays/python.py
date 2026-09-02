def calculate_pairs(n, arr):
    sArr = [0] * (n+1)
    for i in range(n):
        sArr[i+1] = sArr[i] + arr[i]
    obj = {}
    ans = 0
    for b in range(n-1, 0, -1):
        for r in range(b+1, n+1):
            s_r = sArr[r] - sArr[b]
            obj[s_r] = obj.get(s_r, 0) + 1
        for a in range(b):
            s_a = sArr[b] - sArr[a]
            ans += obj.get(s_a, 0)
    return ans
    pass

def main():
    import sys
    input = sys.stdin.read
    data = input().strip().split()
    n = int(data[0])  # The first line of input, integer N
    arr = list(map(int, data[1:n+1]))  # The second line of input, N space-separated integers
    result = calculate_pairs(n, arr)
    print(result)

if __name__ == "__main__":
    main()