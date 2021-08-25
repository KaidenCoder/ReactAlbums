import React, { useEffect, useState } from 'react';

const PutAlbums = () => {

    const [putvalue, setPutValue] = useState({})

    // CALLING PUT METHOD ON ALBUM ID: 2
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums/2",
            {
                method: "PUT",
                body: JSON.stringify({
                    title: "Learn Javascript because it is incredible as I wrote this through the FETCH PUT method",
                    userId: 1
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(response => response.json())
            .then(data => setPutValue(data))
    }, [])

    // DISPLAY THE ALBUM USING THE PUT METHOD
    return (
        <>
            <h5 className="pb-2" style={{ textDecoration: "underline" }}>PUT METHOD</h5>
            <div className="card" style={{ margin: "auto", width: '18rem', padding: '2em' }}>
                <p>ID: {putvalue.id}</p>
                <p>TITLE: {putvalue.title}</p>
            </div>

        </>
    )
}

export default PutAlbums
