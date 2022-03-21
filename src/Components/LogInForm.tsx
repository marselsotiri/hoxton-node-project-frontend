import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { logIn } from '../utils/api';
//@ts-ignore
import { useStore } from '../Store/store';

const LogInForm = () => {
    const { formData, onChange, changeInput } = useForm({
        phone: '',
        password: '',
        email: '',
    });
    const currentUser = useStore((store: any) => store.currentUser);

    const navigate = useNavigate();


    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                //check if login with email or phone
                logIn(
                    formData.password!,
                    document.querySelector(`input[name=phone]`)
                        ? 'phone'
                        : 'email',
                    document.querySelector(`input[name=phone]`)
                        ? formData.phone!
                        : formData.email!
                ).then();
            }}
            className='log_in'
        >
            <label htmlFor='phone'>
                Phone{' '}
                <input
                    onChange={onChange}
                    placeholder='(+XXX)'
                    type='number'
                    name='phone'
                    required
                />
            </label>
            <label htmlFor='password'>
                Password{' '}
                <input
                    onChange={onChange}
                    placeholder='***'
                    type='password'
                    name='password'
                    required
                />
            </label>
            <span
                onClick={(e) => {
                    if (document.querySelector(`input[name=phone]`)) {
                        changeInput('phone', 'email');
                    } else {
                        changeInput('email', 'phone');
                    }
                }}
                id='changeInput'
            >
                {' '}
                Log in with email
            </span>
            <span onClick={(e) => navigate('/sign-up')}> Or Sign Up</span>
            <button type='submit'>Continue</button>
        </form>
    );
};

export default LogInForm;
