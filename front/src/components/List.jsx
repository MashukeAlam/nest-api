import ListItem from "./ListItem";
import FileUpload from "./FileUpload";
const List = ({audiosList}) => {
    return (
    <>
        <FileUpload></FileUpload>
        <ul>
            {audiosList.map(e => <ListItem key={e._id} name={e.name} len={e.len}></ListItem>)}
        </ul>
    </>
    
    )
}

export default List;