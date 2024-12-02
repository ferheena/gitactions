function greet() {
    return "Hello from GitHub Actions!";
}

// Add Lambda handler
exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: greet(),
            timestamp: new Date().toISOString()
        })
    };
    return response;
};

module.exports = { greet };
