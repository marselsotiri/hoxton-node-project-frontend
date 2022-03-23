import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HomeBtns from '../../Components/HomeBtns';
import { UserI } from '../../types';
//@ts-ignore
import { useStore } from '../../Store/store';
import '../../assets/Conversation.css';
import { createMessage, validate } from '../../utils/api';

const Conversation = () => {
    const params = useParams();
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

   
    
    if (!currentUser) return <h2>Loading...</h2>;

    const currentConversation = currentUser.conversations.find(
        (conv) => conv.id === Number(params.id)
    );
    return (
        <section className='single_convo'>
            <header className='conversation_header'>
                <button
                    onClick={() => {
                        navigate('/home');
                    }}
                >
                    ◀
                </button>
                <img className='conversation_profile_photo' src={currentConversation?.userId === currentUser.id
                        ? currentConversation.partecipant?.profilePhoto
                        : currentConversation?.user?.profilePhoto} alt="" />
                <h3 className='conversation_name'>
                    {currentConversation?.userId === currentUser.id
                        ? currentConversation.partecipant?.fullName
                        : currentConversation?.user?.fullName}
                </h3>
            </header>

            <ul className='conversation'>
                {currentConversation?.messages.map((message) => {
                    return (
                        <li
                            key={message.id}
                            className={
                                message.userId === currentUser.id
                                    ? `sender`
                                    : `receiver`
                            }
                        >
                            {message.textMessage}
                        </li>
                    );
                })}
            </ul><form onSubmit={e=>{
                e.preventDefault()
                //@ts-ignore
                createMessage(currentUser.id,currentConversation?.id,e.target.message.value).then(data=>{
                    if(data.error)return
                    setCurrentUser(data)
                    window.scrollTo(0, document.body.scrollHeight);
                    //@ts-ignore
                    e.target.reset()
                })
            }}>
            <input name='message'  className='message_input' type="text" />
            </form>
            <HomeBtns />
        </section>
    );
};

export default Conversation;
