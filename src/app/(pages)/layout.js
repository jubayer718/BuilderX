import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const PageLayout = async ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default PageLayout;