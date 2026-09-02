def highestAltitude(n, arr):
    # Write your logic here
    sArr = [0] * (n+1)
    m = False
    for i in range(n):
        sArr[i+1] = sArr[i] + arr[i]
        m = max(sArr[i+1], m) if m is not False else sArr[i+1]
    return m if m > 0 else 0

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    result = highestAltitude(n, arr)
    print(result)