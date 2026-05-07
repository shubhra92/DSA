# Test Framework for Recent Submissions

This directory contains test cases for the Recent Submissions problem.

## Test Case Format

Each test case is a JSON file with the following structure:

```json
{
  "name": "Test Case Name",
  "input": "Input data as string",
  "expectedOutput": "Expected output as string",
  "description": "Brief description of what this test case validates"
}
```

## Available Test Cases

1. **testcase1.json** - Sample Test Case 0 (from problem statement)
2. **testcase2.json** - Sample Test Case 1 (from problem statement)
3. **testcase3.json** - Single submission edge case
4. **testcase4.json** - All submissions within 5000 seconds
5. **testcase5.json** - Large time gaps between submissions
6. **testcase6.json** - Submissions exactly 5000 seconds apart
7. **testcase7.json** - Mixed intervals with queue growth and shrinkage

## Adding New Test Cases

To add a new test case, create a new JSON file following the format above:

```bash
# Example: testcase8.json
{
  "name": "Your Test Name",
  "input": "5\n1 2 3 4 5",
  "expectedOutput": "5",
  "description": "What this test validates"
}
```

The test runner will automatically pick up any `.json` files in this directory.
