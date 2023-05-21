import Image from "./Image";
import './styles/media.css';
const Player = () => {
    return (
        <>
        <div className="all">
            <Image cover={"cover.jpg"}></Image>
            <div className="controls">
                <div className="btn">
                    <button>Play</button>
                </div>
                <div className="btn">
                    <button>Pause</button>
                </div>
                <div className="btn">
                    <button>Loop</button>
                </div>
            </div>
            <audio controls src={"/sometimes.mp3"} />
        </div>
        </>
    )
}

export default Player;