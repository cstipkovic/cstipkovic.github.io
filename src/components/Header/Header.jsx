import React from 'react';

const Header = () => {
    return (
        <header id="menu">
            <a href="#english" className="currentlyLanguage" data-lang="en-US">
                english
            </a>
            |
            <a href="#portuguese" data-lang="pt-BR">
                portuguese
            </a>
        </header>
    );
};

export default Header;
