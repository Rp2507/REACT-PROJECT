import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL, POST_API } from '../constant';

function Form() {

    const [input, setinput] = useState({})
    const [response, setResponse] = useState({});

    const handleInput = (e) => {
        setinput({ ...input, [e.target.value]: e.target.name })
    }
    // console.log(input);

    const handleSubmit = async () => {
        try {
            const res = await axios.post(BASE_URL + POST_API, input);

            // Save data in localStorage
            const existingData = JSON.parse(localStorage.getItem('comment')) || [];
            const updatedData = [...existingData, input];
            localStorage.setItem('comment', JSON.stringify(updatedData));

            setinput("");

            // Set the res for live changes
            setResponse(`Res from server: ${res.data.text}`);
        } catch (error) {
            console.log('Error data:', error);
        }
    };

    useEffect(() => {
        console.log('Live response:', response);
    }, [response]);

    return (
        <>
            <div className='container'>
                <div className='col-6'>
                    <label for="name">Name:</label>
                    <input type="text" name='fname' placeholder='First Name' onChange={handleInput} />
                    <input type="text" name='lname' placeholder='Last Name' onChange={handleInput} /><br /><br />
                    <lable for="comment" >Comment: </lable>
                    <textarea name='comment'>Write Your Comments Here!...</textarea>
                    <button type='submit' onClick={handleSubmit}>SUBMIT</button>
                </div>
            </div>
        </>
    )
}

export default Form
