import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers'

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = e => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            !isValid ? setErrorMessage('Your email is invalid.') : setErrorMessage('');
            console.log(isValid);
        } else {
            !e.target.value.length ? setErrorMessage(`${e.target.name} is required.`) : setErrorMessage('');
        }
        // e.target.name === 'email' && console.log(validateEmail(e.target.value))
        !errorMessage && setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('errorMessage', errorMessage);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formState)
    }
    return (
        <section>
            <h1 data-testid="h1tag">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" name="message" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;