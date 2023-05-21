import Image from "./Image";
import './styles/media.css';
import { HiPlay, HiPause, HiArrowPathRoundedSquare } from "react-icons/hi2";
const Player = () => {
    return (
        <>
        <div className="all">
            <Image cover={"cover.jpg"}></Image>
            <div className="controls">
                <div className="btn">
                    <button><HiPlay /></button>
                </div>
                <div className="btn">
                    <button><HiPause /></button>
                </div>
                <div className="btn">
                    <button><HiArrowPathRoundedSquare /></button>
                </div>
            </div>
            <audio controls src={"/sometimes.mp3"} />
        </div>
        </>
    )
}

export default Player;