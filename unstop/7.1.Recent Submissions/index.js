#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// Parse command line arguments
const args = process.argv.slice(2);
let targetFile = 'JavaScript.js';
let testDir = path.join(__dirname, 'test');
let specificTest = null;

// Parse arguments
for (let i = 0; i < args.length; i++) {
  if (args[i] === '-f' || args[i] === '--file') {
    targetFile = args[i + 1];
    i++;
  } else if (args[i] === '-t' || args[i] === '--test') {
    specificTest = args[i + 1];
    i++;
  } else if (args[i] === '-h' || args[i] === '--help') {
    console.log(`
Usage: node index.js [options]

Options:
  -f, --file <filename>    Specify the JavaScript file to test (default: JavaScript.js)
  -t, --test <testcase>    Run a specific test case file (e.g., testcase1.json)
  -h, --help              Show this help message

Examples:
  node index.js                          # Run all tests on JavaScript.js
  node index.js -f JavaScript.js         # Run all tests on JavaScript.js
  node index.js -t testcase1.json        # Run only testcase1.json
  node index.js -f solution.js -t testcase2.json
    `);
    process.exit(0);
  }
}

// Resolve the target file path
const targetFilePath = path.join(__dirname, targetFile);

// Check if target file exists
if (!fs.existsSync(targetFilePath)) {
  console.error(`❌ Error: File '${targetFile}' not found in ${__dirname}`);
  process.exit(1);
}

// Check if test directory exists
if (!fs.existsSync(testDir)) {
  console.error(`❌ Error: Test directory not found at ${testDir}`);
  process.exit(1);
}

// Get all test case files
let testFiles = fs.readdirSync(testDir)
  .filter(file => file.endsWith('.json'))
  .sort();

// Filter to specific test if requested
if (specificTest) {
  testFiles = testFiles.filter(file => file === specificTest);
  if (testFiles.length === 0) {
    console.error(`❌ Error: Test file '${specificTest}' not found in test directory`);
    process.exit(1);
  }
}

console.log(`\n🧪 Running tests for: ${targetFile}`);
console.log(`📁 Test directory: ${testDir}`);
console.log(`📝 Found ${testFiles.length} test case(s)\n`);
console.log('='.repeat(70));

let passedTests = 0;
let failedTests = 0;
let currentTest = 0;

// Function to run a single test
function runTest(testFile) {
  return new Promise((resolve) => {
    const testPath = path.join(testDir, testFile);
    const testCase = JSON.parse(fs.readFileSync(testPath, 'utf8'));
    
    currentTest++;
    console.log(`\n[${currentTest}/${testFiles.length}] ${testCase.name}`);
    console.log(`    Description: ${testCase.description}`);
    
    // Spawn node process to run the target file
    const child = spawn('node', [targetFilePath]);
    
    let output = '';
    let errorOutput = '';
    
    // Collect stdout
    child.stdout.on('data', (data) => {
      output += data.toString();
    });
    
    // Collect stderr
    child.stderr.on('data', (data) => {
      errorOutput += data.toString();
    });
    
    // Handle process completion
    child.on('close', (code) => {
      // Trim and normalize output
      const actualOutput = output.trim();
      const expectedOutput = testCase.expectedOutput.trim();
      
      if (code !== 0) {
        console.log(`    ❌ FAILED - Process exited with code ${code}`);
        if (errorOutput) {
          console.log(`    Error: ${errorOutput.trim()}`);
        }
        failedTests++;
      } else if (actualOutput === expectedOutput) {
        console.log(`    ✅ PASSED`);
        console.log(`    Expected: ${expectedOutput}`);
        console.log(`    Got:      ${actualOutput}`);
        passedTests++;
      } else {
        console.log(`    ❌ FAILED - Output mismatch`);
        console.log(`    Expected: ${expectedOutput}`);
        console.log(`    Got:      ${actualOutput}`);
        failedTests++;
      }
      
      resolve();
    });
    
    // Send input to the process
    child.stdin.write(testCase.input);
    child.stdin.end();
  });
}

// Run all tests sequentially
async function runAllTests() {
  for (const testFile of testFiles) {
    await runTest(testFile);
  }
  
  // Print summary
  console.log('\n' + '='.repeat(70));
  console.log('\n📊 Test Summary:');
  console.log(`   Total:  ${passedTests + failedTests}`);
  console.log(`   ✅ Passed: ${passedTests}`);
  console.log(`   ❌ Failed: ${failedTests}`);
  
  if (failedTests === 0) {
    console.log('\n🎉 All tests passed!\n');
    process.exit(0);
  } else {
    console.log('\n⚠️  Some tests failed. Please review the output above.\n');
    process.exit(1);
  }
}

// Start running tests
runAllTests().catch(err => {
  console.error('Error running tests:', err);
  process.exit(1);
});
