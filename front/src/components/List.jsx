import ListItem from "./ListItem";

const List = ({listName, audiosList}) => {
    return (
    <>
    
        <div>Hello {listName}</div>
        <ul>
            {audiosList.map(e => <ListItem key={e._id} name={e.name} len={e.len}></ListItem>)}
        </ul>
    </>
    
    )
}

export default List;