import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

const SignUpForm = () => {
    const { formData, onChange, changeInput } = useForm({
        phone: '',
        password: '',
        email: '',
        name: '',
    });
    const navigate = useNavigate();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
            }}
            className='log_in'
        >
            <label htmlFor='name'>
                Name{' '}
                <input
                    onChange={onChange}
                    placeholder=''
                    type='text'
                    name='Name'
                    required
                />
            </label>
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
            <label htmlFor='email'>
                Email{' '}
                <input
                    onChange={onChange}
                    placeholder='(xxx@)'
                    type='text'
                    name='email'
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

            <span onClick={(e) => navigate('/log-in')}> Or Log In</span>
            <button type='submit' id='sign-up'>
                Accept and Continue
            </button>
        </form>
    );
};

export default SignUpForm;
