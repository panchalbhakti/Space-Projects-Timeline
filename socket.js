// Initialize the socket variable
let socket;

// Event listener to open the WebSocket connection when the button is clicked
document.getElementById('connect').onclick = function() {
    console.log('Button clicked, attempting to connect...');
    // Open WebSocket connection to the server running on localhost:5000
    socket = new WebSocket('wss://localhost:5000'); // Connect to the server at localhost:5000

    // Handle when the WebSocket is open (connection successful)
    socket.onopen = function() {
        console.log('Connected to the server');
        socket.send("Hello, Server!");  // Send a message to the server once connected
    };

    // Handle when a message is received from the server
    socket.onmessage = function(event) {
        console.log('Message from server:', event.data);
        document.getElementById('response').innerText = "Server says: " + event.data;
    };

    // Handle any WebSocket errors
    socket.onerror = function(error) {
        console.log("WebSocket Error: " + error);
    };

    // Handle when the WebSocket connection is closed
    socket.onclose = function() {
        console.log('Disconnected from the server');
    };
};
