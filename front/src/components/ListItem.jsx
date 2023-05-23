import './styles/style.css'
const ListItem = ({name, len, change}) => {
    return (
        <>
        <div  className="holder">
            <h4 >{name}</h4>
            <p>{len}</p>
            <button onClick={() => change({name})}>Play</button>
        </div>
        </>
        );
}

export default ListItem;