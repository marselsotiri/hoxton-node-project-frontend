import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './Pages/Contacts/Contacts';
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

                </Routes>
            </main>
        </>
    );
}

export default App;
