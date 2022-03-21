import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { signUp } from '../utils/api'; //@ts-ignore
import { useStore } from '../Store/store';

const SignUpForm = () => {
    const { formData, onChange } = useForm({
        phone: '',
        password: '',
        email: '',
        name: '',
        photo: '',
    });
    // const setShowSignUpError = useStore(
    //     (store: any) => store.setShowSignUpError
    // );
    const navigate = useNavigate();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                signUp(
                    formData.password!,
                    formData.email!,
                    formData.name!,
                    formData.phone!,
                    formData.photo!
                ).then();
                // setShowSignUpError(true);
            }}
            className='log_in'
        >
            <label htmlFor='name'>
                Name{' '}
                <input
                    onChange={onChange}
                    placeholder=''
                    type='text'
                    name='name'
                    required
                    autoComplete='off'
                />
            </label>
            <label htmlFor='photo'>
                Photo{' '}
                <input
                    onChange={onChange}
                    placeholder='.jpg'
                    type='text'
                    name='photo'
                    autoComplete='off'
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
                    autoComplete='off'
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
                    autoComplete='off'
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
