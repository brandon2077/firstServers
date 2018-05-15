//Define the port for incoming requests
const PORT = 7000;

// Creating a generic function to handle requests and responses
function handleRequest(request, response) {

// Send the below string to the client when the user visits to the PORT URL
	response.end("You're awesome!");
};

// Using the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality
const server = http.createServer(handleRequest);

// Start our server so that it can begin listening to our client requests
server.listen(PORT, function() {

// Log (server-side) when our client has started
	console.log("Server listening on: https://localhost:" + PORT);

});

