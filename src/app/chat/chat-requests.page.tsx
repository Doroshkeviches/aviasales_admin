import {io} from "socket.io-client";
import {useEffect, useState} from "react";

const URL = 'http://localhost:4444';
const socket = io(URL);

export default function ChatRequestsPage() {
    const [request, setRequest] = useState(null);


    useEffect(() => {
        socket.emit("join-requests-channel")
    }, [])

    socket.on('request', (data) => {
        console.log("incoming request");
        setRequest(data);
        console.log(data)
    })

    return (
        <>{request}</>
    )
}