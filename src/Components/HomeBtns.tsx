import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeBtns = () => {
    const navigate = useNavigate();
    return (
        <section className='home_btns'>
            <button onClick={(e) => navigate('/home')}>Chat</button>
            <button
                onClick={(e) => navigate('/contacts')}
                style={{
                    borderLeft: '1px solid black',
                    borderRight: '1px solid black',
                }}
            >
                Contacts
            </button>
            <button onClick={(e) => navigate('/profile')}>Profile</button>
        </section>
    );
};

export default HomeBtns;
