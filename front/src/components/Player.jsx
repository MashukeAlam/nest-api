import { useState } from "react";
import Image from "./Image";
// import './styles/media.css';
import { HiPlay, HiPause, HiArrowPathRoundedSquare } from "react-icons/hi2";

const play = () => {
    document.getElementById('player').play();
}
const pause = () => {
    document.getElementById('player').pause();
}


const Player = ({song}) => {
    const [progress, setProgress] = useState(0);
    const setValues = (e) => {
        const percentage = document.getElementById('player').currentTime / document.getElementById('player').duration;
        setProgress(percentage * 300);
    }
    return (
        <>
        <div className="all flex flex-col justify-evenly m-16">
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
            <div className="w-[400px] h-[25px] bg-emerald-200">
                <div id="top" className="">
                    <div style={{width: `${progress}px`}} id="bottom" className="h-[25px] bg-emerald-300"></div>
                </div>
            </div>
            <audio onTimeUpdate={setValues} id="player" controls src={`/${song}`} />
        </div>
        </>
    )
}

export default Player;