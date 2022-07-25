import React from 'react'
import { useNavigate } from "react-router-dom"
const Notes = () => {
    let [title, setTitle] = React.useState("");
    let [note, setNote] = React.useState("");
    let [label, setLabel] = React.useState("");
    const [allNote, setAllNote] = React.useState([]);
    let navigate = useNavigate()
    const handleAddNote = async () => {
        let body = {
            title, note,
            label,
        }
        let token = localStorage.getItem('token');
        try {
            await fetch("http://localhost:8080/note", {
                method: "POST",
                headers: {
                    "Content-Type": "application-json",
                    "token": token
                },
                 body: JSON.stringify(body),
            })

             getAllNotes();
            // setTitle = "";
            // setLabel="";
            // setNote=""
           
        } catch (error) {
            console.log(error+"janjdj")
        }
    }
    async function getAllNotes() {
        let token = localStorage.getItem("token");
        // console.log(token)
        try {
            let res = await fetch("http://localhost:8080/note/all", {
                method: "GET",
                headers: {
                    "Content-Type": "application-json",
                    "token": token
                }
            })
            let data = await res.json();
            console.log(data.note)
            // setTodos(data);
            // if (typeof(data) == 'array') {
                setAllNote(data.note);
            
            // else {
            //     navigate('/')
            // }
        } catch (error) {
            console.log("something wrong")
        }

    }

    React.useEffect(() => {
        getAllNotes();
    }, []);
    return (
        <div className='todo-box'>
            <div>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" value={note} onChange={(e) => setNote(e.target.value)} />
                <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} />
                
                <button onClick={handleAddNote}>Add</button>
            </div>
            <div>
                {allNote?.map((note, index) => {
                    return <div key={index}>
                        <h3>{note.title}</h3>
                        <p>{note.note}</p>
                        <p>{note.label}</p>
                    </div>
                })
                }
            </div>
        </div>
    )
}

export default Notes