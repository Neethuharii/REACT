import React, { useState } from 'react';
import './Contact.css'
function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (e) => {
        //Destructure the properties from the event target
        const { name, value } = e.target;

        // Update the state using the setFormData function and prevState
        setFormData(prevState => ({
            ...prevState, // Spread the previous state
            [name]: value // Update the specific field with the new value
        }));
    };


    return (
        <div className='contact'>
            <h2>Contact Form</h2>
            <form>
              
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                    />
                    <p>You typed: {formData.name}</p>
                </label>
                
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange}

                    />
                    <p>You typed: {formData.email}</p>
                </label>
                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange}


                    />
                    <p>You typed: {formData.message}</p>
                </label>
            </form>
        </div>
    );
}

export default ContactForm;
