import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SessionProviderWrapper } from '@/utils/sessionProvider';



const PageLayout = async ({ children }) => {
    return (
        <SessionProviderWrapper>
             <div>
            <Navbar />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
        </div>
       </SessionProviderWrapper>
    );
};

export default PageLayout;