import { useState, useEffect } from "react";

const Test = () => {

    const [picture, setPicture] = useState('');

     let name = ''
        if (picture) {
            name = picture[0].name
        }
            console.log(name);

    useEffect(() => {
        const url = 'http://localhost:8080/media-catalog/getPictures';
        const options = {
            headers: {
                'Content-Type': 'application/json',
            }
        }



        fetch(url, options).then(data => data.json().then(output => {
            if (output.status == 'success') {
                // setContacts(output.data);
                console.log(output.data);
                // console.log(output.data[0].name);
                setPicture(output.data)
            } else {
                console.log(output.message);
            }

        }));
    }, []);


    return (
        <div>
            <h2>Test page</h2>
            <img src = {"http://localhost:8080/greeting-pictures/" + name}/>
            {/* <img src = {"http://localhost:8080/avatars/" + avatar}/> */}
        </div>
    );
}

export default Test;
