import React, { useEffect } from 'react';
import HomeBtns from '../../Components/HomeBtns';
import '../../assets/Profile.css';
//@ts-ignore
import { useStore } from '../../Store/store';
import { useNavigate } from 'react-router-dom';
import { updateStatus, validate } from '../../utils/api';
import { UserI } from '../../types';
import { removeTokenFromStorage } from '../../utils/helpers';

const Profile = () => {
    const navigate = useNavigate();
    const setCurrentUser = useStore((store: any) => store.setCurrentUser);
    const currentUser: UserI = useStore((store: any) => store.currentUser);

    useEffect(() => {
        validate().then((data) => {
            if (data.error) {
                navigate('/');
                return;
            }
            setCurrentUser(data);
        });
    }, []);

    if (!currentUser) return <h2>Loading...</h2>;

    return (
        <section className='home profile'>
            <header>
                <h2>Profile</h2>
            </header>
            <section className='profile_info'>
                <img
                    className='profile_photo'
                    src={currentUser.profilePhoto}
                    alt=''
                />
                <h3>{currentUser.fullName}</h3>
            </section>
            <section className='status'>
                <h3> Status</h3>
                <p
                    onClick={(e) => {
                        //@ts-ignore
                        e.target.style.display = 'none';
                        const input: HTMLInputElement | null =
                            document.querySelector('.status_input');
                        if (!input) return;
                        input.style.display = 'block';
                        input.focus();
                        //@ts-ignore
                        input.value = e.target.textContent;
                    }}
                    className='status'
                >
                    {
                        // currentUser.userStatus||
                        'This is my status'
                    }
                </p>
                <input
                    onBlur={(e) => {
                        updateStatus(e.target.value).then(setCurrentUser);
                        e.target.style.display = 'none';
                        const status: HTMLParagraphElement | null =
                            document.querySelector('p.status');
                        if (!status) return;
                        //@ts-ignore
                        status.textContent =
                            //@ts-ignore
                            document.querySelector('.status_input').value;
                        status.style.display = 'block';
                    }}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            //@ts-ignore
                            updateStatus(e.target.value).then(setCurrentUser);
                            // @ts-ignore
                            document.querySelector('p.status').style.display =
                                'block';

                            // @ts-ignore
                            e.target.style.display = 'none';
                        }
                    }}
                    type='text'
                    className='status_input'
                />
                <button
                    onClick={(e) => {
                        setCurrentUser(null);
                        removeTokenFromStorage()
                        navigate('/');
                    }}
                >
                    Sign out
                </button>
            </section>
            <HomeBtns />
        </section>
    );
};

export default Profile;
