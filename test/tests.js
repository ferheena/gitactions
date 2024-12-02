const { greet } = require('../src/app.js');

// Test 1: Test the greet function
console.log('Test 1: Testing greet function');
const greeting = greet();
console.assert(greeting === "Hello from GitHub Actions!", "Greeting message doesn't match expected output");
console.log('Greeting test passed:', greeting);

// Test 2: Mock Lambda handler test
console.log('\nTest 2: Testing Lambda handler structure');
const { handler } = require('../src/app.js');

async function testHandler() {
    try {
        const result = await handler({});
        console.log('Lambda response:', result);
        
        // Test status code
        console.assert(result.statusCode === 200, "Status code should be 200");
        
        // Parse and test response body
        const body = JSON.parse(result.body);
        console.assert(body.message === "Hello from GitHub Actions!", "Lambda message doesn't match expected output");
        console.assert(typeof body.timestamp === 'string', "Timestamp should be a string");
        
        console.log('Lambda handler test passed');
    } catch (error) {
        console.error('Lambda handler test failed:', error);
    }
}

// Run the Lambda handler test
testHandler();
