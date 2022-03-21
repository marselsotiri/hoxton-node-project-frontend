import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/Start.css';

const Start = () => {
    const navigate = useNavigate();
    return (
        <section className='start'>
            <section className='startBtns'>
                <button onClick={(e) => navigate('/log-in')} className='log_in'>
                    Log In
                </button>
                <button onClick={(e) => navigate('/sign-up')} className='sign_up'>Sign Up</button>
            </section>
        </section>
    );
};

export default Start;
