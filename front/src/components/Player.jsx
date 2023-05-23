import { useState } from "react";
import Image from "./Image";
import './styles/media.css';
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
        <div className="all">
            <Image cover={"cover.jpg"}></Image>
            <div className="controls">
                <div className="btn">
                    <button onClick={play}><HiPlay /></button>
                </div>
                <div className="btn">
                    <button onClick={pause}><HiPause /></button>
                </div>
                <div className="btn">
                    <button><HiArrowPathRoundedSquare /></button>
                </div>
            </div>
            <div className="slider">
                <div id="top" className="top">
                    <div style={{width: `${progress}px`}} id="bottom" className="bottom"></div>
                </div>
            </div>
            <audio onTimeUpdate={setValues} id="player" controls src={`/${song}`} />
        </div>
        </>
    )
}

export default Player;