import React, { useEffect } from 'react';
import '../../assets/LogIn.css';
import LogInForm from '../../Components/LogInForm';
import { validate } from '../../utils/api';
//@ts-ignore
import { useStore } from '../../Store/store';
import { useNavigate } from 'react-router-dom';
import { setTokenInStorage } from '../../utils/helpers';

const LogIn = () => {

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
        <section className='log_in'>
            <h2>Log in via Phone or Email</h2>
            <LogInForm />
        </section>
    );
};

export default LogIn;
