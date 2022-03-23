import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/Home.css';
import HomeBtns from '../../Components/HomeBtns';
//@ts-ignore
import { useStore } from '../../Store/store';
import { UserI } from '../../types';
import { validate } from '../../utils/api';

const Home = () => {
    const currentUser: UserI = useStore((store: any) => store.currentUser);
    const navigate = useNavigate();
    const setCurrentUser = useStore((store: any) => store.setCurrentUser);

    useEffect(() => {
        validate().then((data) => {
            if (data.error) {
                navigate('/');
                return;
            }

            setCurrentUser(data);
        });
    }, []);

    // useEffect(() => {
    //     if (!currentUser) navigate('/');
    // }, []);

    if (!currentUser) return <h2>Loading...</h2>;

    return (
        <section className='home'>
            <header>
                <h2>WeChat</h2>
                <input placeholder='Search' type='text' />
            </header>
            <button
                onClick={(e) => navigate('/contacts')}
                className='new_convo'
            >
                New Conversation
            </button>
            <ul className='conversations'>
                {currentUser.conversations.map((conversation) => {
                    return (
                        <li
                            onClick={(e) =>
                                navigate(`/conversation/${conversation.userId===currentUser.id?conversation.participantId:conversation.userId}`)
                            }
                            key={conversation.id}
                            className='conversation'
                        >
                            <img
                                src={
                                    conversation.userId === currentUser.id
                                        ? conversation.partecipant?.profilePhoto
                                        : conversation.user?.profilePhoto
                                }
                                alt=''
                                className='user_photo'
                            />
                            <section className='conversation_info'>
                                <h4 className='chat_name'>
                                    {conversation.userId === currentUser.id
                                        ? conversation.partecipant?.fullName
                                        : conversation.user?.fullName}
                                </h4>
                                <span className='last_msg'>
                                    {
                                        conversation.messages[
                                            conversation.messages.length - 1
                                        ]?.textMessage
                                    }
                                </span>
                            </section>
                        </li>
                    );
                })}
            </ul>
            <HomeBtns />
        </section>
    );
};

export default Home;
