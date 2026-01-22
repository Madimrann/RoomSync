import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
    houseId?: string | null;
    role?: 'admin' | 'member';
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: () => Promise<void>;
    logout: () => Promise<void>;
    joinHouse: (houseId: string) => Promise<void>;
    createHouse: (name: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Mock initial load
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    const login = async () => {
        // Mock login
        setUser({
            id: 'u1',
            name: 'Adib',
            email: 'adib@roomsync.com',
            avatarUrl: 'https://i.pravatar.cc/150?u=adib',
            houseId: null, // Initially no house
        });
    };

    const logout = async () => {
        setUser(null);
    };

    const joinHouse = async (houseId: string) => {
        if (user) {
            setUser({ ...user, houseId, role: 'member' });
        }
    };

    const createHouse = async (name: string) => {
        if (user) {
            setUser({ ...user, houseId: 'h1', role: 'admin' });
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                isLoading,
                login,
                logout,
                joinHouse,
                createHouse,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
