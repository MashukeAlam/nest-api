import ListItem from "./ListItem";
import FileUpload from "./FileUpload";
const List = ({audiosList}) => {
    return (
    <>
        <FileUpload></FileUpload>
        <div>
 <ul>
            {audiosList.map(e => <ListItem key={e._id} name={e.name} len={e.len}></ListItem>)}
        </ul>

        </div>
       
    </>
    
    )
}

export default List;