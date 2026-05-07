# Test Framework Documentation

## Overview

This test framework allows you to run automated tests against your JavaScript solution for the Recent Submissions problem.

## Quick Start

```bash
# Navigate to the problem directory
cd "unstop/7.1.Recent Submissions"

# Run all tests on JavaScript.js
node index.js

# Or explicitly specify the file
node index.js -f JavaScript.js
```

## Usage

### Run All Tests

```bash
node index.js
```

This will run all test cases in the `test/` directory against `JavaScript.js`.

### Specify a Different File

```bash
node index.js -f solution.js
```

### Run a Specific Test Case

```bash
node index.js -t testcase1.json
```

### Combine Options

```bash
node index.js -f solution.js -t testcase2.json
```

### Get Help

```bash
node index.js --help
```

## Command Line Options

| Option | Alias | Description | Example |
|--------|-------|-------------|---------|
| `--file` | `-f` | Specify the JavaScript file to test | `-f JavaScript.js` |
| `--test` | `-t` | Run a specific test case file | `-t testcase1.json` |
| `--help` | `-h` | Show help message | `-h` |

## Test Output

The test runner provides detailed output for each test:

```
🧪 Running tests for: JavaScript.js
📁 Test directory: /path/to/test
📝 Found 7 test case(s)

======================================================================

[1/7] Sample Test Case 0
    Description: Each submission removes the previous one as they are exactly 5000 seconds apart
    ✅ PASSED
    Expected: 1
    Got:      1

[2/7] Sample Test Case 1
    Description: Maximum queue size is 3 at time 5002
    ✅ PASSED
    Expected: 3
    Got:      3

...

======================================================================

📊 Test Summary:
   Total:  7
   ✅ Passed: 7
   ❌ Failed: 0

🎉 All tests passed!
```

## Directory Structure

```
7.1.Recent Submissions/
├── JavaScript.js           # Your solution file
├── question.md            # Problem statement
├── index.js               # Test runner
├── TEST_FRAMEWORK.md      # This file
└── test/                  # Test cases directory
    ├── README.md          # Test cases documentation
    ├── testcase1.json     # Sample test case 0
    ├── testcase2.json     # Sample test case 1
    ├── testcase3.json     # Single submission
    ├── testcase4.json     # All within 5000 seconds
    ├── testcase5.json     # Large time gaps
    ├── testcase6.json     # Exactly 5000 apart
    └── testcase7.json     # Mixed intervals
```

## Creating New Test Cases

1. Create a new JSON file in the `test/` directory
2. Follow this format:

```json
{
  "name": "Descriptive Test Name",
  "input": "5\n1 2 3 4 5",
  "expectedOutput": "5",
  "description": "Brief description of what this test validates"
}
```

3. The test runner will automatically detect and run it

## Exit Codes

- `0` - All tests passed
- `1` - One or more tests failed or error occurred

This makes it easy to integrate with CI/CD pipelines:

```bash
node index.js && echo "Tests passed!" || echo "Tests failed!"
```

## Troubleshooting

### "File not found" error

Make sure you're running the command from the correct directory:

```bash
cd "unstop/7.1.Recent Submissions"
node index.js
```

### "Test directory not found" error

Ensure the `test/` directory exists and contains `.json` test case files.

### Process hangs

If the target JavaScript file has infinite loops or doesn't properly close stdin, the test may hang. Press `Ctrl+C` to stop.

## Tips

1. **Run tests frequently** - Run tests after each code change to catch issues early
2. **Add edge cases** - Create test cases for boundary conditions
3. **Test performance** - Add test cases with large inputs (within constraints)
4. **Use descriptive names** - Make test case names clear and meaningful

## Example Workflow

```bash
# 1. Write your solution in JavaScript.js
vim JavaScript.js

# 2. Run all tests
node index.js

# 3. If a specific test fails, run it individually
node index.js -t testcase2.json

# 4. Fix the issue and re-run
node index.js

# 5. All tests pass! 🎉
```
