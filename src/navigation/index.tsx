import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { colors } from '../theme/colors';
import { AppNavigator } from './AppNavigator';
import { AuthNavigator } from './AuthNavigator';
import { RootStackParamList } from './types';

// Modals
import { CreateAnnouncementScreen } from '../screens/announcements/CreateAnnouncementScreen';
import { AddBillScreen } from '../screens/bills/AddBillScreen';
import { AddChoreScreen } from '../screens/chores/AddChoreScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!isAuthenticated ? (
                    <Stack.Screen name="Auth" component={AuthNavigator} />
                ) : (
                    <Stack.Screen name="App" component={AppNavigator} />
                )}

                {/* Global Modals */}
                <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen name="AddChore" component={AddChoreScreen} />
                    <Stack.Screen name="AddBill" component={AddBillScreen} />
                    <Stack.Screen name="CreateAnnouncement" component={CreateAnnouncementScreen} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
