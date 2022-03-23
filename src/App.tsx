import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './Pages/Contacts/Contacts';
import Conversation from './Pages/Conversation/Conversation';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import Profile from './Pages/Profile/Profile';
import SignUp from './Pages/SignUp/SignUp';
import Start from './Pages/Start/Start';

function App() {
    return (
        <>
            <main>
                <Routes>
                    <Route index element={<Start />}></Route>
                    <Route path='/log-in' element={<LogIn />}></Route>
                    <Route path='/sign-up' element={<SignUp />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/contacts' element={<Contacts />}></Route>
                    <Route path='/profile' element={<Profile />}></Route>
                    <Route
                        path='/conversation/:id'
                        element={<Conversation />}
                    />
                    <Route path='*' element={<h1>Not found</h1>} />
                </Routes>
            </main>
        </>
    );
}

export default App;
