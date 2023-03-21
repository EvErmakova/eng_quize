import React from 'react';
import Logo from '../logo/logo';

function Footer(): JSX.Element {
    return (
        <footer className="bg-violet-900 text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-4 lg:px-8">
                <Logo />
            </div>
        </footer>
    );
}

export default Footer;
