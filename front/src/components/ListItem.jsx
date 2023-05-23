import './styles/style.css'
const ListItem = ({name, len}) => {
    return (
        <>
        <div className="holder" >
            <h4>{name}</h4>
            <p>{len}</p>
        </div>
        </>
        );
}

export default ListItem;