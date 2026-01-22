import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ChevronRight, Clock, LogOut, Settings, Users } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { useAuth } from '../../context/AuthContext';
import { RootStackParamList } from '../../navigation/types';
import { colors } from '../../theme/colors';
import { layout } from '../../theme/layout';
import { typography } from '../../theme/typography';

export const MoreScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { logout, user } = useAuth();

  const MenuItem = ({ icon, label, onPress, danger = false }: any) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuLeft}>
        <View style={[styles.iconContainer, danger && styles.dangerIcon]}>
          {icon}
        </View>
        <Text style={[styles.menuLabel, danger && styles.dangerText]}>{label}</Text>
      </View>
      {!danger && <ChevronRight size={20} color={colors.textLight} />}
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>More</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>

        {/* Profile Card */}
        <TouchableOpacity style={styles.profileCard} onPress={() => navigation.navigate('MemberProfile', { userId: user?.id ?? '1' })}>
          <View style={styles.avatar}>
            <Text style={styles.initials}>{user?.name?.charAt(0) || 'U'}</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{user?.name || 'User Name'}</Text>
            <Text style={styles.role}>{user?.role || 'Member'}</Text>
          </View>
          <ChevronRight size={20} color={colors.textLight} />
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>House</Text>
          <MenuItem
            icon={<Users size={20} color={colors.primary} />}
            label="Members"
            onPress={() => navigation.navigate('MemberProfile', { userId: 'list' })} // Hacky redirect to members list
          />
          <MenuItem
            icon={<Settings size={20} color={colors.primary} />}
            label="House Settings"
            onPress={() => navigation.navigate('HouseSettings')}
          />
          <MenuItem
            icon={<Clock size={20} color={colors.primary} />}
            label="History"
            onPress={() => navigation.navigate('History')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <MenuItem
            icon={<LogOut size={20} color={colors.danger} />}
            label="Log Out"
            onPress={logout}
            danger
          />
        </View>

      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: layout.spacing.lg,
    backgroundColor: colors.background,
  },
  headerTitle: {
    ...typography.h1,
  },
  content: {
    padding: layout.spacing.lg,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    padding: layout.spacing.lg,
    borderRadius: layout.borderRadius.lg,
    marginBottom: layout.spacing.xl,
    ...layout.shadow.small,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: layout.spacing.md,
  },
  initials: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    ...typography.h3,
    fontSize: 18,
    fontWeight: '600',
  },
  role: {
    ...typography.bodySmall,
    color: colors.textLight,
    textTransform: 'capitalize',
  },
  section: {
    marginBottom: layout.spacing.xl,
  },
  sectionTitle: {
    ...typography.label,
    color: colors.textLight,
    marginBottom: layout.spacing.sm,
    marginLeft: layout.spacing.sm,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.card,
    padding: layout.spacing.md,
    marginBottom: 1, // Separator
    borderRadius: layout.borderRadius.md,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#EFF6FF', // Blue-50
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: layout.spacing.md,
  },
  dangerIcon: {
    backgroundColor: '#FEE2E2', // Red-100
  },
  menuLabel: {
    ...typography.body,
    fontWeight: '500',
  },
  dangerText: {
    color: colors.danger,
  },
});
