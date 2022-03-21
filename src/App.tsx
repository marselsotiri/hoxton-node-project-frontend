import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Start from './Pages/Start/Start';

function App() {
    return (
        <>
            <main>
                <Routes>
                    <Route index element={<Start />}></Route>
                </Routes>
            </main>
        </>
    );
}

export default App;
