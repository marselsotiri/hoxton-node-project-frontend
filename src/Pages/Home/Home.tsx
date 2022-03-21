import React from 'react';
import '../../assets/Home.css';

const Home = () => {
    return (
        <section className='home'>
            <header>
                <h2>WeChat</h2>
                <input placeholder='Search' type='text' />
            </header>
            <button className='new_convo'>New Conversation</button>
            <ul className='conversations'>
                <li className='conversation'>
                    <img
                        src='https://avatars.dicebear.com/api/avataaars/geri.svg'
                        alt=''
                        className='user_photo'
                    />
                    <section className='conversation_info'>
                        <h4 className='chat_name'>Geri Luga</h4>
                        <span className='last_msg'>Last message</span>
                    </section>
                </li>
                <li className='conversation'>
                    <img
                        src='https://avatars.dicebear.com/api/avataaars/geri.svg'
                        alt=''
                        className='user_photo'
                    />
                    <section className='conversation_info'>
                        <h4 className='chat_name'>Geri Luga</h4>
                        <span className='last_msg'>Last message</span>
                    </section>
                </li>
                <li className='conversation'>
                    <img
                        src='https://avatars.dicebear.com/api/avataaars/geri.svg'
                        alt=''
                        className='user_photo'
                    />
                    <section className='conversation_info'>
                        <h4 className='chat_name'>Geri Luga</h4>
                        <span className='last_msg'>Last message</span>
                    </section>
                </li>
                <li className='conversation'>
                    <img
                        src='https://avatars.dicebear.com/api/avataaars/geri.svg'
                        alt=''
                        className='user_photo'
                    />
                    <section className='conversation_info'>
                        <h4 className='chat_name'>Geri Luga</h4>
                        <span className='last_msg'>Last message</span>
                    </section>
                </li>
                <li className='conversation'>
                    <img
                        src='https://avatars.dicebear.com/api/avataaars/geri.svg'
                        alt=''
                        className='user_photo'
                    />
                    <section className='conversation_info'>
                        <h4 className='chat_name'>Geri Luga</h4>
                        <span className='last_msg'>Last message</span>
                    </section>
                </li>
            </ul>
            <section className='home_btns'>
                <button>Chat</button>
                <button>Contacts</button>
                <button>Profile</button>
            </section>
        </section>
    );
};

export default Home;
