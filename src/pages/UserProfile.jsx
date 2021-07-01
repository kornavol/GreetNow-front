import './Auth.css';


export default function Auth() {
    const [state, setstate] = useState(menu)

    function menu() {
        return (
            <>
            <div onClick = {() => (setState(<ContactList/>))} >Contact List</div>
            <div>Calendar</div>
            <div>User Catalog</div>
            <div>Settings</div>
            </>
        )
        
    }
    
    return (
        <div>
            {state}
        </div>
    )
}
