import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Routes/Layout';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';

function RoutesHandlingPage() {
    return (
        <>
            <div className='topheading'>
                <h1 style={{ textAlign: 'center' }}>RoutesHandlingPage</h1>
                <BrowserRouter >
                    <Layout />
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </BrowserRouter>
            </div>

        </>
    )
}

export default RoutesHandlingPage