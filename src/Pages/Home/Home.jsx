import React from 'react';

import LanguageChanger from '../../components/LanguageChanger/LanguageChanger';
import Main from '../../components/Home/Home';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <main>
            <LanguageChanger />
            <Main />
            <Footer />
        </main>
    );
};

export default Home;
