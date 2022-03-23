import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../../Components/SignUpForm';
//@ts-ignore
import { useStore } from '../../Store/store';
import { UserI } from '../../types';
import { validate } from '../../utils/api';

const SignUp = () => {
    const setCurrentUser = useStore((store: any) => store.setCurrentUser);
    const navigate = useNavigate();
    const currentUser: UserI = useStore((store: any) => store.currentUser);


    useEffect(() => {
        validate().then((data) => {
            if (data.error) return;
            setCurrentUser(data.user);
            navigate('/home');
        });
    }, []);
    // useEffect(() => {
    //     if(currentUser)navigate('/home');
    // }, [currentUser])
    

    return (
        <section className='log_in'>
            <h2>Create an account</h2>

            <SignUpForm />
        </section>
    );
};

export default SignUp;
