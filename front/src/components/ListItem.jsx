import './styles/style.css'
import { HiPlay} from "react-icons/hi2";
const ListItem = ({ name, len, change }) => {
    return (
        <>
            <div className="m-6 p-6 h-24 max-w-sm mx-auto bg-primary shadow-lg flex flex-row rounded-lg items-center space-x-4">
                <div className="shrink-0 basis-1/4">
                    <img className='w-11 h-11' src="/music.svg" alt="" srcset="" />
                </div>
                <div className='basis-1/2 flex flex-col justify-center'>
                    <div className="text-secondary text-xl font-medium text-black">{name}</div>
                    <p className="text-slate-500">{len}</p>
                </div>
                <div className='basis-1/4'>
                    <button onClick={() => change({name})}><HiPlay /></button>
                </div>
            </div>
        </>
    );
}
export default ListItem;