import React from 'react';
import Header from 'layout/components/Header';

const Layout = ({ children }) => (
    <div>
        <Header />
        <main>
            {children}
        </main>
        <footer>footer</footer>
    </div>
);

export default Layout;
