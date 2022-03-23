import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeBtns from '../../Components/HomeBtns';
//@ts-ignore
import { useStore } from '../../Store/store';
import { UserI } from '../../types';
import { createConversation, getAllUsers, validate } from '../../utils/api';

const Contacts = () => {
    const users: UserI[] = useStore((store: any) => store.users);
    const navigate = useNavigate();
    const setCurrentUser = useStore((store: any) => store.setCurrentUser);
    const setUsers = useStore((store: any) => store.setUsers);
    const currentUser: UserI = useStore((store: any) => store.currentUser);

    useEffect(() => {
        validate().then((data) => {
            if (data.error) {
                navigate('/');
                return;
            }
            setCurrentUser(data);
            getAllUsers().then(setUsers);
        });
    }, []);

    const usersIhaventTalkedTo = users.filter(
        (user) =>
            !currentUser.conversations.find(
                (convo) =>
                    convo.participantId === user.id || convo.userId === user.id
            )
    ).filter(user=>user.id!==currentUser.id)

    if (!currentUser) return <h2>Loading...</h2>;

    return (
        <section className='home'>
            <header>
                <h2>Contacts</h2>
            </header>
            <ul className='conversations'>
                {usersIhaventTalkedTo.map((user) => {
                    return (
                        <li
                            onClick={(e) => {
                                createConversation(currentUser.id,user.id).then(data=>{
                                    if(data.error)return
                                    setCurrentUser(data)
                                    navigate('/conversation/' + currentUser.conversations[currentUser.conversations.length-1].id);
                                })
                                
                            }}
                            key={user.id}
                            className='conversation'
                        >
                            <img
                                src={user.profilePhoto}
                                alt=''
                                className='user_photo'
                            />
                            <section className='conversation_info'>
                                <h4 className='chat_name'>{user.fullName}</h4>
                                <span className='last_msg'>Click to chat</span>
                            </section>
                        </li>
                    );
                })}
            </ul>
            <HomeBtns />
        </section>
    );
};

export default Contacts;
