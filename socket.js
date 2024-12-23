// main.js

let socket;

document.getElementById('connect').onclick = function() {
    // Replace 'example.com' with your actual domain or server IP
    // socket = new WebSocket('ws://example.com:5000'); // WebSocket connection
    socket = new WebSocket('ws://Space-Projects-Timeline.com:5000');

    socket.onopen = function() {
        console.log('Connected to the server');
        socket.send("Hello, Server!");  // Send a message to the server
    };

    socket.onmessage = function(event) {
        console.log('Message from server:', event.data);
    };

    socket.onerror = function(error) {
        console.log("WebSocket Error: " + error);
    };

    socket.onclose = function() {
        console.log('Disconnected from the server');
    };
};
