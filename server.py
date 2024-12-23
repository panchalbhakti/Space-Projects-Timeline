import asyncio
import websockets

async def handle_connection(websocket, path):
    print("Client connected")
    # Send a welcome message to the client
    await websocket.send("Hello from the server!")

    # Receive message from the client
    async for message in websocket:
        print(f"Received message from client: {message}")
        await websocket.send(f"Echo: {message}")  # Echo back the message

# Start the WebSocket server on localhost:5000
start_server = websockets.serve(handle_connection, "localhost", 5000)

# Run the server
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
