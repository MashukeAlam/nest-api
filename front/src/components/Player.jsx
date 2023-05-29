import { useState, useEffect, useRef } from "react";
import Image from "./Image";
import { HiPlay, HiPause, HiArrowPathRoundedSquare } from "react-icons/hi2";



const pause = () => {
    document.getElementById('player').pause();
}

const Player = ({song}) => {
    const mediaElementCreated = useRef(false);
    const [progress, setProgress] = useState(0);
    const [source, setSource] = useState(null);
    const [context, setContext] = useState(null);
    const setValues = (e) => {
        const percentage = document.getElementById('player').currentTime / document.getElementById('player').duration;
        setProgress(percentage * 450);
    }

    const play = () => {
        if (!mediaElementCreated.current) {
            console.log("hello?", source);
            const audioElement = document.getElementById('player');
            const context = new AudioContext();
    
            const s = context.createMediaElementSource(audioElement);
            setSource(s);
            setContext(context);
            console.log('hey', s);
            mediaElementCreated.current = true;
            const stereoNode = new StereoPannerNode(context, { pan: 0 });
            stereoNode.pan.value = 1;
            s.connect(stereoNode).connect(context.destination);
        }
        document.getElementById('player').play();
    }

    // useEffect(() => {
    //     if (!mediaElementCreated.current) {
    //         console.log("hello?", source);
    //         const audioElement = document.getElementById('player');
    //         const context = new AudioContext();

    //         // const s = context.createMediaElementSource(audioElement);
    //         const s = "";
    //         setSource(s);
    //         setContext(context);
    //         console.log('hey', s);
    //         mediaElementCreated.current = true;
    //     }
        

    // }, []);

    const getRndInteger = () => {
        
      }

    const handleMouse = (e) => {
        const stereoNode = new StereoPannerNode(context, { pan: 0 });
        stereoNode.pan.value += 0.5;
        console.log(stereoNode.pan.value);
        source.connect(stereoNode).connect(context.destination);
        console.log(source, context);
    }
    
    return (
        <>
        <div className="all flex flex-col justify-evenly m-16 self-center">
            <Image cover={"cover.jpg"}></Image>
            <div className="flex flex-row justify-around">
                <div className="btn">
                    <button className="h-16 w-16 border-cyan-300" onClick={play}><HiPlay /></button>
                </div>
                <div className="btn">
                    <button className="h-16 w-16" onClick={pause}><HiPause /></button>
                </div>
                <div className="btn">
                    <button className="h-16 w-16"><HiArrowPathRoundedSquare /></button>
                </div>
            </div>
            <div className="w-[450px] h-[25px] bg-emerald-200">
                <div id="top" className="">
                    <div style={{width: `${progress}px`}} id="bottom" className="h-[25px] bg-emerald-300"></div>
                </div>
            </div>
            <audio onMouseEnter={handleMouse} onTimeUpdate={setValues} id="player" controls src={`/${song}`} />
        </div>
      
        </>
    )
}

export default Player;