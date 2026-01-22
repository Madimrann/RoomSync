const fs = require('fs');
const path = require('path');

const screens = [
    'src/screens/auth/WelcomeScreen.tsx',
    'src/screens/auth/LoginScreen.tsx',
    'src/screens/auth/CreateHouseScreen.tsx',
    'src/screens/auth/JoinHouseScreen.tsx',
    'src/screens/auth/InviteMembersScreen.tsx',
    'src/screens/auth/SplashScreen.tsx',
    'src/screens/home/HomeScreen.tsx',
    'src/screens/chores/ChoresListScreen.tsx',
    'src/screens/bills/BillsOverviewScreen.tsx',
    'src/screens/announcements/AnnouncementsFeedScreen.tsx',
    'src/screens/more/MoreScreen.tsx',
    // Details
    'src/screens/chores/AddChoreScreen.tsx',
    'src/screens/chores/ChoreDetailScreen.tsx',
    'src/screens/bills/AddBillScreen.tsx',
    'src/screens/bills/BillDetailScreen.tsx',
    'src/screens/announcements/CreateAnnouncementScreen.tsx',
    'src/screens/announcements/AnnouncementDetailScreen.tsx',
    'src/screens/members/MemberProfileScreen.tsx',
    'src/screens/members/HouseSettingsScreen.tsx',
    'src/screens/more/HistoryScreen.tsx',
];

const template = (name) => `
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScreenWrapper } from '../../components/ScreenWrapper';

export const ${name} = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text>${name}</Text>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
`;

screens.forEach(file => {
    const dir = path.dirname(file);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    const name = path.basename(file, '.tsx');
    fs.writeFileSync(file, template(name));
    console.log(`Created ${file}`);
});
