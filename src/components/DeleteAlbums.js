import React, { useEffect, useState } from 'react';

const DeleteAlbums = () => {
    const [value, setValue] = useState({})
    const [deletevalue, setDeleteValue] = useState({})

    // CALLING GET METHOD ON ALBUM ID: 2
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums/2")
            .then(response => response.json())
            .then(data => setValue(data))
    }, [])

    // CALLING DELETE METHOD ON ALBUM ID: 2
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums/2",
            {
                method: "DELETE"
            })
            .then(response => response.json())
            .then(data => setDeleteValue(data))
    }, [])

    return (
        <>
            <h5 className="pb-2" style={{ textDecoration: "underline" }}>DELETE METHOD</h5>
            {/* DISPLAY THE ALBUM USING THE GET METHOD */}
            <div className="card mb-2" style={{ margin: "auto", width: '18rem', padding: '2em' }}>
                <h6 className="pb-2" style={{ textDecoration: "underline" }}>BEFORE DELETED ID-2</h6>
                <p>ID: {value.id}</p>
                <p>TITLE: {value.title}</p>
            </div>
            {/* DISPLAY THE ALBUM USING THE DELETE METHOD */}
            <div className="card" style={{ margin: "auto", width: '18rem', padding: '2em' }}>
                <h6 style={{ textDecoration: "underline" }}>AFTER DELETED ID-2</h6>
                <p>ID: {deletevalue.id}</p>
                <p>TITLE: {deletevalue.title}</p>
            </div>

        </>
    )
}

export default DeleteAlbums
