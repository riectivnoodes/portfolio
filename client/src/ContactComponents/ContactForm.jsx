import { useState } from 'react';
import { useSetForm } from '../MessengerComponents/MessengerHooks/setUserData';
import './Contact.css'

const ContactForm = () => {

    const [value, setValues] = useState({name: '', email: '', message: ''})

    const handleSubmit = (event) => {
        event.preventDefault();
        // if (value.name === undefined || value.email === undefined) return alert('please enter your name and email')
        alert( `Thank you ${value.name} for contacting me I'll be in touch`)
        setValues((values) => ({
            ...values,
            name: '',
            email: '',
            message: '',
        }));
    }

    const setName = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            name: event.target.value,
        }));
    }
    const setEmail = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    }
    const setMessage = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            message: event.target.value,
        }));
    }
    return (
        <>
            <div className='overlayContainer'>
            <div className='Contact-Form-Overlay bg-dark' />
            </div>
            <div className='Contact-Form-Main d-flex flex-column align-items-center justify-content-center bg-dark'>
                <h1 className='text-light'>Contact Me</h1>
                <div className='Form-Container text-accent d-flex flex-column justify-content-center align-items-center'>
                    <form className='w-100 d-flex flex-row justify-content-center align-items-center flex-wrap' onSubmit={handleSubmit}>
                        <div className='m-3 d-flex flex-column justify-content-center'>
                            name:
                            <input className='' type='text' title='name input' name='name' value={value.name} onChange={setName}>
                            </input>
                        </div>
                        <div className='d-flex flex-column justify-content-center'>
                            email:
                            <input className='' type='text' title='email input' name='email' value={value.email} onChange={setEmail}>
                            </input>
                        </div>
                        <div className='m-3 d-flex flex-column justify-content-center'>
                        message:
                            <input className='' type='text' title='message input' name='message' value={value.message} onChange={setMessage}>
                            </input>
                        </div>
                        <button className='bg-accent btn' type='submit'>send</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ContactForm ;