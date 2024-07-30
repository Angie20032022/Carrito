// src/Home.js
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    const [message, setMessage] = useState('Bienvenido a Nuestra Página de Inicio');

    const changeMessage = () => {
        setMessage('Gracias por visitarnos');
    }

    return (
        <div>
            <Header />
            <main>
                <h1>{message}</h1>
                <p>Descripción del sitio y de los servicios que ofrece.</p>
                <button onClick={changeMessage}>Haz clic aquí</button>
            </main>
            <Footer />
        </div>
    );
}

export default Home;
