import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './Pages/LogIn/LogIn';
import Start from './Pages/Start/Start';

function App() {
    return (
        <>
            <main>
                <Routes>
                    <Route index element={<Start />}></Route>
                    <Route path='/log-in' element={<LogIn />}></Route>
                </Routes>
            </main>
        </>
    );
}

export default App;
