import React from 'react';
import HomeBtns from '../../Components/HomeBtns';
import '../../assets/Profile.css';

const Profile = () => {
    return (
        <section className='home profile'>
            <header>
                <h2>Profile</h2>
            </header>
            <section className='profile_info'>
                <img
                    className='profile_photo'
                    src='https://avatars.dicebear.com/api/avataaars/geri.svg'
                    alt=''
                />
                <h3>Geri Luga</h3>
            </section>
            <section className='status'>
                <h3> Status</h3>
                <p className='status'>This is my status</p>
            </section>
            <HomeBtns />
        </section>
    );
};

export default Profile;
