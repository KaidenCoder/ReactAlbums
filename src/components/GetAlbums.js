import React, { useEffect, useState } from 'react';

const GetAlbums = () => {
    const [value, setValue] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(response => response.json())
            .then(data => setValue(data))
    }, [])

    // DISPLAY ALL THE ALBUMS USING GET METHOD
    return (
        <div className="col-sm row cards">
            <h5 className="pb-2 title-method">GET METHOD</h5>
            {value.map((i, d) => (
                <div className="card m-3" key={d} style={{ width: "18rem" }}>
                    <p>ID: {i.id}</p>
                    <p>TITLE: {i.title}</p>
                </div>
            ))}
        </div>
    )
}

export default GetAlbums
