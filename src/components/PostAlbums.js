import React, { useEffect, useState } from 'react';

const PostAlbums = () => {
    const [postvalue, setPostValue] = useState({})

    // CALLING POST METHOD ON NEW ALBUM ID
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums",
            {
                method: "POST",
                body: JSON.stringify({
                    title: "I posted this message through the FETCH POST method",
                    userId: 1
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(response => response.json())
            .then(data => setPostValue(data))
    }, [])

    // DISPLAY THE ALBUM USING THE POST METHOD
    return (
        <>
            <h5 className="pb-2" style={{ textDecoration: "underline" }}>POST METHOD</h5>
            <div className="card" style={{ margin: "auto", width: '18rem', padding: '2em' }}>
                <p>ID: {postvalue.id}</p>
                <p>TITLE: {postvalue.title}</p>
            </div>
        </>
    )
}

export default PostAlbums
