import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/Start.css';

//@ts-ignore
import { useStore } from '../../Store/store';
import { validate } from '../../utils/api';
import { setTokenInStorage } from '../../utils/helpers';

const Start = () => {
    const setCurrentUser = useStore((store: any) => store.setCurrentUser);
    const navigate = useNavigate();

    useEffect(() => {
        validate().then((data) => {
            if (data.error) return;
            setCurrentUser(data.user);
            navigate('/home');
        });
    }, []);

    return (
        <section className='start'>
            <section className='startBtns'>
                <button onClick={(e) => navigate('/log-in')} className='log_in'>
                    Log In
                </button>
                <button
                    onClick={(e) => navigate('/sign-up')}
                    className='sign_up'
                >
                    Sign Up
                </button>
            </section>
        </section>
    );
};

export default Start;
