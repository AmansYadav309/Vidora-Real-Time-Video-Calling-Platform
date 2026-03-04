import React, { use, useEffect, useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const server_url = "http://localhost:5000";

var connection ={};

const peerConfigConnection = {
    "iceServers" : [
        {"urls": "stun:stun.l.google.com:19302" }
    ]
}

const VideoComponent = () => {

    var socketRef = useRef();
    let socketIdref = useRef();
    let localVideoRef = useRef();


let [videoAvailable , setVideoAvailable] = useState(true);
let [audioAvailable , setAudioAvailable] = useState(true);
let [video , setVideo] = useState( );
let [audio , setAudio] = useState();
let [screen , SetScreen] = useState();
let [showModal , SetShowModal] = useState();
let [screenAvailable , SetScreenAvailable] = useState();
let [messages , setMessages] = useState();
let [message , setMessage] = useState();
let [newMessages , setNewMessages] = useState();
let [askForUsername , setAskForUsername] = useState("true");
let [username , setUsername] = useState("");
const videoRef = useRef([]);
let [videos , setVideos] = useState();



const getPermissions = async ()=> {
            try {
                const videoPermission = await navigator.mediaDevices.getUserMedia( {video:true})
                if (videoPermission) {
                    setVideoAvailable(true);
                }else{
                    setVideoAvailable(false);
                }
                
                const audioPermission = await navigator.mediaDevices.getUserMedia( {audio:true})
                if (audioPermission) {
                    setAudioAvailable(true);
                }else{
                    setAudioAvailable(false);
                }

                if (navigator.mediaDevices.getDisplayMedia) {
                      SetScreenAvailable(true)
                }
                else{
                    SetScreenAvailable(false)
                }

                if (videoAvailable || audioAvailable ) {
                    const userMediaStream = await navigator.mediaDevices.getUserMedia({ video : videoAvailable , audio : audioAvailable })
                    if (userMediaStream) {
                        window.localStream = userMediaStream;
                        if(localVideoRef.current){
                            localVideoRef.current.srcObject = userMediaStream;
                        }
                    }
                }

            } catch (error) {
                console.log(error);
            }
}

useEffect(()=>{
        getPermissions();
 } , [])

let getUserMediaSucess = (stream) => {
    
}


let getUserMedia = ()=> { 
    if ((video && videoAvailable) || (audio && videoAvailable )) {
        navigator.mediaDevices.getUserMedia({video: video , audio : audio})
        .then(()=>{})// todo getUserMediaSucess 
        .then((stream)=> { })
        .catch((e)=> {console.log(e)})
    }else{
        try {
            let tracks = localVideoRef.current.srcObject.getTracks();
            tracks.forEach(track => track.stop())
        } catch (error) {
            
        }
    }
}

useEffect(()=> { 
    if (video !== undefined  && audio !== undefined ) {
        getUserMedia();
    }
} , [ video , audio ])

 const getMedia = ()=>{
    setVideos(videoAvailable);
    setAudio(audioAvailable)
    
 }

    return (
        // <div>
        //     {askForUsername === true ? 
            <div>
                <h2>Enter into Lobby</h2>
                <TextField id="outlined-basic" label="username"  variant="outlined" vlaue={username} onChange={(e)=>setUsername(e.target.value)} />
                    <Button variant="contained">Connect </Button>
                <div>
                    <video ref={localVideoRef} autoPlay muted playsInline id="localVideo"></video>
                </div>

            </div>
        //     :<></>
        //     } 
        // </div>
    );
}

export default VideoComponent;

