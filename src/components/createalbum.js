import { useRef } from 'react';
import '../App.css';

function Createalbum({ addDate }) {
    const albumname = useRef();
    function submit(e) {
        e.preventDefault();
        const name = albumname.current.value;
        const datapass = {
            name,
            date: new Date(),
        }
        addDate(datapass)
        console.log(datapass);
    }
    return (
        <div className="create">
            <div>
                <h1>Create An album</h1>
            </div>
            <div className="searchbox-wrap">
                <input type="text" ref={albumname} placeholder="Create name..." />
                <button onClick={submit} ><span>Send</span> </button>
            </div>
        </div>

    )
}
export default Createalbum
