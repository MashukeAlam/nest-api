import ListItem from "./ListItem";
import FileUpload from "./FileUpload";
const List = ({audiosList, change}) => {
    return (
    <>
        <FileUpload></FileUpload>
        <div>
            <ul>
                {audiosList.map(e => <ListItem key={e._id} name={e.name} len={e.len} change={change}></ListItem>)}
            </ul>
        </div>
       
    </>
    
    )
}

export default List;