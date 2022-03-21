import React from 'react';
import SignUpForm from '../../Components/SignUpForm';
//@ts-ignore
import { useStore } from '../../Store/store';

const SignUp = () => {
    // const showSignUpError = useStore((store: any) => store.showSignUpError);
    return (
        <section className='log_in'>
            <h2>Create an account</h2>
            <SignUpForm />
            {/* {showSignUpError && <h1>Error found</h1>} */}
        </section>
    );
};

export default SignUp;
