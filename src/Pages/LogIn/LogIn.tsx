import React from 'react';
import '../../assets/LogIn.css';
import LogInForm from '../../Components/LogInForm';

const LogIn = () => {
    return (
        <section className='log_in'>
            <h2>Log in via Phone or Email</h2>
            <LogInForm/>
        </section>
    );
};

export default LogIn;
