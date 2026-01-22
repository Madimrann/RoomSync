import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Bell, CheckCircle, DollarSign, MessageSquare, Plus } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppCard } from '../../components/AppCard';
import { HouseSwitcher } from '../../components/HouseSwitcher';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { RootStackParamList } from '../../navigation/types';
import { colors } from '../../theme/colors';
import { layout } from '../../theme/layout';
import { typography } from '../../theme/typography';

// Mock Data
const MOCK_CHORES = [
  { id: '1', title: 'Take out trash', due: '10:00 AM', assignee: 'Adib' },
  { id: '2', title: 'Clean kitchen', due: '2:00 PM', assignee: 'Sara' },
];

const MOCK_BILLS = [
  { id: '1', title: 'WiFi Bill', amount: 'RM 120', due: 'Due Jan 25' },
  { id: '2', title: 'Electricity', amount: 'RM 180', due: 'Due Jan 30' },
];

export const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const QuickActionButton = ({ icon, label, onPress, color }: any) => (
    <TouchableOpacity style={styles.quickAction} onPress={onPress}>
      <View style={[styles.quickActionIcon, { backgroundColor: color || colors.primary }]}>
        {icon}
      </View>
      <Text style={styles.quickActionLabel}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper scroll>
      <View style={styles.header}>
        <HouseSwitcher houseName="The Chill Pad" onPress={() => navigation.navigate('HouseSettings')} />
        <TouchableOpacity style={styles.bellButton}>
          <Bell size={24} color={colors.text} />
          <View style={styles.badge} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>

        {/* Section 1: Today */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Chores Due Today</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
            {MOCK_CHORES.map((chore) => (
              <AppCard key={chore.id} style={styles.choreCard}>
                <View style={styles.choreHeader}>
                  <Text style={styles.choreTitle} numberOfLines={1}>{chore.title}</Text>
                  <TouchableOpacity>
                    <CheckCircle size={20} color={colors.textLight} />
                  </TouchableOpacity>
                </View>
                <View style={styles.choreFooter}>
                  <View style={styles.avatarPlaceholder} />
                  <Text style={styles.choreDue}>{chore.due}</Text>
                </View>
              </AppCard>
            ))}
            <TouchableOpacity style={styles.addChoreCard} onPress={() => navigation.navigate('AddChore')}>
              <Plus size={24} color={colors.primary} />
              <Text style={styles.addText}>Add New</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Section 2: Bills */}
        <View style={styles.section}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Bills Due Soon</Text>
            <TouchableOpacity hitSlop={10} onPress={() => navigation.navigate('App', { screen: 'Bills' })}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          {MOCK_BILLS.map((bill) => (
            <AppCard key={bill.id} style={styles.billCard}>
              <View style={styles.billIcon}>
                <DollarSign size={20} color={colors.warning} />
              </View>
              <View style={styles.billInfo}>
                <Text style={styles.billTitle}>{bill.title}</Text>
                <Text style={styles.billDue}>{bill.due}</Text>
              </View>
              <Text style={styles.billAmount}>{bill.amount}</Text>
            </AppCard>
          ))}
        </View>

        {/* Section 3: Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsRow}>
            <QuickActionButton
              icon={<Plus size={24} color={colors.white} />}
              label="Add Chore"
              onPress={() => navigation.navigate('AddChore')}
            />
            <QuickActionButton
              icon={<DollarSign size={24} color={colors.white} />}
              label="Add Bill"
              color={colors.warning}
              onPress={() => navigation.navigate('AddBill')}
            />
            <QuickActionButton
              icon={<MessageSquare size={24} color={colors.white} />}
              label="Post Update"
              color={colors.info}
              onPress={() => navigation.navigate('CreateAnnouncement')}
            />
          </View>
        </View>

        {/* Section 4: House Pulse */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>House Pulse</Text>
          <View style={styles.pulseRow}>
            <AppCard style={styles.pulseCard}>
              <Text style={styles.pulseValue}>12</Text>
              <Text style={styles.pulseLabel}>Chores Done</Text>
            </AppCard>
            <AppCard style={styles.pulseCard}>
              <Text style={[styles.pulseValue, { color: colors.danger }]}>3</Text>
              <Text style={styles.pulseLabel}>Unpaid Bills</Text>
            </AppCard>
          </View>
        </View>

      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: layout.spacing.lg,
    paddingVertical: layout.spacing.md,
    backgroundColor: colors.background,
  },
  bellButton: {
    padding: 8,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.danger,
    borderWidth: 1,
    borderColor: colors.white,
  },
  content: {
    paddingBottom: layout.spacing.xxl,
  },
  section: {
    marginTop: layout.spacing.lg,
    paddingHorizontal: layout.spacing.lg,
  },
  sectionTitle: {
    ...typography.sectionHeader,
    marginBottom: layout.spacing.md,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: layout.spacing.md,
  },
  seeAll: {
    ...typography.label,
    color: colors.primary,
  },
  horizontalScroll: {
    paddingRight: layout.spacing.lg,
    gap: layout.spacing.md,
  },
  choreCard: {
    width: 160,
    height: 100,
    justifyContent: 'space-between',
  },
  addChoreCard: {
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: layout.borderRadius.lg,
  },
  addText: {
    ...typography.label,
    marginTop: 4,
  },
  choreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  choreTitle: {
    ...typography.bodySmall,
    fontWeight: '600',
    flex: 1,
  },
  choreFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarPlaceholder: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.primary,
  },
  choreDue: {
    fontSize: 10,
    color: colors.textLight,
  },
  billCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: layout.spacing.sm,
    padding: layout.spacing.md,
  },
  billIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: layout.spacing.md,
  },
  billInfo: {
    flex: 1,
  },
  billTitle: {
    fontWeight: '600',
    color: colors.text,
  },
  billDue: {
    fontSize: 12,
    color: colors.textLight,
  },
  billAmount: {
    fontWeight: 'bold',
    color: colors.text,
  },
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickAction: {
    alignItems: 'center',
    flex: 1,
  },
  quickActionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    ...layout.shadow.medium,
  },
  quickActionLabel: {
    ...typography.label,
    fontWeight: '600',
  },
  pulseRow: {
    flexDirection: 'row',
    gap: layout.spacing.md,
  },
  pulseCard: {
    flex: 1,
    alignItems: 'center',
    padding: layout.spacing.lg,
  },
  pulseValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.success,
    marginBottom: 4,
  },
  pulseLabel: {
    fontSize: 12,
    color: colors.textLight,
  },
});
