"use client"
import { AuthContext } from '@/context/AuthContext';
import { useUser } from '@/lib/clerk-client';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { ThemeProvider } from '@/app/_components/ThemeContext';
import { ThemeSwitcher } from '@/app/_components/ThemeSwitcher';

function Provider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { user } = useUser();
    useEffect(() => {
        user && createNewUser();
    }, [user]);

    const createNewUser = async () => {
        const result = await axios.post('/api/user');
    }

    return (
        <ThemeProvider>
            <div>
                {children}
                <ThemeSwitcher />
            </div>
        </ThemeProvider>
    )
}

// Custom hook to use auth
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};

export default Provider

