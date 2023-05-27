import ListItem from "./ListItem";
import FileUpload from "./FileUpload";
const List = ({audiosList, change}) => {
    return (
    <>
    <div className="flex flex-col justify-center ">
        <FileUpload></FileUpload>
        <div>
            <ul>
                {audiosList.map(e => <ListItem key={e._id} name={e.name} len={e.len} change={change}></ListItem>)}
            </ul>
        </div>
    </div>
        
       
    </>
    
    )
}

export default List;