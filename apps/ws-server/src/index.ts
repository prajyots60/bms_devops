import "dotenv/config";
import { WebSocketServer } from "ws";
import {client} from "@repo/db/client";

const server = new WebSocketServer({
    port : 3001
});

server.on("connection",  async (ws) => {
    const res = await client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    ws.send("Hello from WebSocket server!");
    console.log("WS SERVER DATABASE_URL:", process.env.DATABASE_URL);
console.log("DB CLIENT FILE:", require.resolve("@repo/db/client"));

    console.log(res);
    
})