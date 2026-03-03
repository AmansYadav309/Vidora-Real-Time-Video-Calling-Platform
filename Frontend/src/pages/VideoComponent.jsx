import React, { use, useRef, useState } from 'react';

const server_url = "http://localhost:5000";

var connection ={};

const peerConfigConnection = {
    "iceServers" : [
        {"urls": "sunt:sunt.l.google.com:19302" }
    ]
}

var socketRef = useRef();
let socketIdref = useRef();
let localVideoRef = useRef();


let [videoAvailable , setVideoAvailable] = useState(true);
let [audioAvailable , setAudioAvailable] = useState(true);
let [video , setVideo] = useState();
let [audio , setAudio] = useState();
let [screen , SetScreen] = useState();
let [showModal , SetShowModal] = useState();
let [screenAvailable , SetScreenAvailable] = useState();
let [messages , setMessages] = useState();
let [message , setMessage] = useState();
let [newMessages , setNewMessages] = useState();
let [askForUsername , setAskForUsername] = useState();
let [username , setUsername] = useState();
const videoRef = useRef([]);
let [videos , setVideos] = useState();


const VideoComponent = () => {
    return (
        <div>
            {askForUsername === true ? 
            <div>

            </div>:<></>
            } 
        </div>
    );
}

export default VideoComponent;

