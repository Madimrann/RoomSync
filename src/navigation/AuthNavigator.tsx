import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CreateHouseScreen } from '../screens/auth/CreateHouseScreen';
import { InviteMembersScreen } from '../screens/auth/InviteMembersScreen';
import { JoinHouseScreen } from '../screens/auth/JoinHouseScreen';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { SplashScreen } from '../screens/auth/SplashScreen';
import { WelcomeScreen } from '../screens/auth/WelcomeScreen';
import { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: '#F8FAFC' },
            }}
            initialRouteName="Splash"
        >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="CreateHouse" component={CreateHouseScreen} />
            <Stack.Screen name="JoinHouse" component={JoinHouseScreen} />
            <Stack.Screen name="InviteMembers" component={InviteMembersScreen} />
        </Stack.Navigator>
    );
};
