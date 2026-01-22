import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bell, CheckSquare, DollarSign, Home, MoreHorizontal } from 'lucide-react-native';
import React from 'react';
import { AnnouncementsFeedScreen } from '../screens/announcements/AnnouncementsFeedScreen';
import { BillsOverviewScreen } from '../screens/bills/BillsOverviewScreen';
import { ChoresListScreen } from '../screens/chores/ChoresListScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { MoreScreen } from '../screens/more/MoreScreen';
import { colors } from '../theme/colors';
import { HomeTabParamList } from './types';

const Tab = createBottomTabNavigator<HomeTabParamList>();

export const AppNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textLight,
                tabBarStyle: {
                    borderTopColor: colors.border,
                    backgroundColor: colors.white,
                    height: 60,
                    paddingBottom: 8,
                    paddingTop: 8,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                },
                tabBarIcon: ({ color, size }) => {
                    switch (route.name) {
                        case 'Home': return <Home color={color} size={size} />;
                        case 'Chores': return <CheckSquare color={color} size={size} />;
                        case 'Bills': return <DollarSign color={color} size={size} />;
                        case 'Announcements': return <Bell color={color} size={size} />;
                        case 'More': return <MoreHorizontal color={color} size={size} />;
                        default: return null;
                    }
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Chores" component={ChoresListScreen} />
            <Tab.Screen name="Bills" component={BillsOverviewScreen} />
            <Tab.Screen name="Announcements" component={AnnouncementsFeedScreen} />
            <Tab.Screen name="More" component={MoreScreen} />
        </Tab.Navigator>
    );
};
