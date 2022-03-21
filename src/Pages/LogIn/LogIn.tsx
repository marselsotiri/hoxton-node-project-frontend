import React from 'react';
import '../../assets/LogIn.css';

const LogIn = () => {
    return (
        <section className='log_in'>
            <h2>Log in via Mobile Number</h2>
            <form className='log_in'>
                <label htmlFor='region'>
                    Region <input type='text' name='region' />
                </label>
                <label htmlFor='phone'>
                    Phone <input type='number' name='phone' />
                </label>
                <span> Log in with email</span>
                <button type='submit'>Continue</button>
            </form>
        </section>
    );
};

export default LogIn;
