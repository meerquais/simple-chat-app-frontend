import React, { useEffect, useState } from 'react'
import api from '../services/api';
import socket from '../services/socket';
import Message from '../components/Message';

function Chat() {

    const [text, setText] = useState("");
    const [message,setMessage] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));


    useEffect(()=>{
        const fetchMessages = async ()=>{
            const res = await api.get("/messages");
            setMessage(res.data)
        };

        fetchMessages();
    }, []);


    useEffect(()=>{
       
        socket.on("receive_message", (data)=>{
            setMessage((prev)=>[...prev , data]);
        });

        return()=> socket.off("receive_message");
    } , []);

    const sendMessage = ()=>{
        if(!text) return;

        socket.emit("send_message",{
            sender:user.username,
            text
        });

        setText("");
    };
  return (
   <>
    <div style={{width:"400px" , margin:"auto"}}>

            <h2>Chat Room</h2>

            <div style={{border:"1px solid gray", height:"300px" , overflowY:"scroll"}}>

                {message.map((msg)=>(
                    <Message key={msg._id} msg={msg} />
                ))}

            </div>


            <input value={text} onChange={(e)=> setText(e.target.value)} placeholder='Type here...' />
            <button onClick={sendMessage}>Send</button>

    </div>
   
   
   
   </>
  )
}

export default Chat