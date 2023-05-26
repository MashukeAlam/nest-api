import './styles/style.css'
import { HiPlay} from "react-icons/hi2";
const ListItem = ({ name, len, change }) => {
    return (
        <>
        <div className="parent flex flex-row items-center group">
            <div className="m-6 p-6 h-24 w-96 bg-primary shadow-lg flex flex-row rounded-3xl hover:rounded-xl items-center space-x-4 transition-all">
                <div className="shrink-0 basis-1/4">
                    <img className='w-11 h-11' src="/music.svg" alt="" srcset="" />
                </div>
                <div className='basis-1/2 flex flex-col justify-center'>
                    <div className="text-secondary text-xl font-medium ">{name}</div>
                    <p className="text-slate-500">{len}</p>
                </div>
                <div className='basis-1/4 flex justify-end'>
                    <button onClick={() => change({name})}><HiPlay /></button>
                </div>
            </div>
            <div className="tooltip bg-black text-primary font-extrabold rounded-lg p-[12px] scale-0 group-hover:scale-100">
                play the song!  
            </div>
        </div>
            
        </>
    );
}
export default ListItem;