# Quick Start Guide

## Run Tests in 3 Steps

### 1. Navigate to the folder
```bash
cd "unstop/7.1.Recent Submissions"
```

### 2. Run the tests
```bash
node index.js
```

### 3. See the results! 🎉

## Common Commands

```bash
# Run all tests
node index.js

# Run specific test
node index.js -t testcase1.json

# Test a different file
node index.js -f solution.js

# Get help
node index.js --help
```

## What You Get

✅ **7 comprehensive test cases** covering:
- Sample test cases from the problem
- Edge cases (single submission, exactly 5000 apart)
- Boundary conditions (all within 5000, large gaps)
- Complex scenarios (mixed intervals)

✅ **Clear output** showing:
- Which tests passed/failed
- Expected vs actual output
- Test descriptions
- Summary statistics

✅ **Easy to extend** - Just add more `.json` files in the `test/` folder!

## Test Case Format

```json
{
  "name": "Test Name",
  "input": "3\n300 6000 100000",
  "expectedOutput": "1",
  "description": "What this tests"
}
```

---

For more details, see [TEST_FRAMEWORK.md](./TEST_FRAMEWORK.md)
