import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Plus } from 'lucide-react-native';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppCard } from '../../components/AppCard';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { StatusChip } from '../../components/StatusChip';
import { RootStackParamList } from '../../navigation/types';
import { colors } from '../../theme/colors';
import { layout } from '../../theme/layout';
import { typography } from '../../theme/typography';

const MOCK_BILLS = [
  { id: '1', title: 'WiFi Bill', amount: 'RM 120.00', due: 'Jan 25', status: 'unpaid', myShare: 'RM 30.00' },
  { id: '2', title: 'Electricity', amount: 'RM 180.00', due: 'Jan 30', status: 'unpaid', myShare: 'RM 45.00' },
  { id: '3', title: 'Netflix', amount: 'RM 45.00', due: 'Jan 15', status: 'paid', myShare: 'RM 11.25' },
];

export const BillsOverviewScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [filter, setFilter] = useState<'all' | 'unpaid' | 'paid'>('all');

  const renderBill = ({ item }: { item: any }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('BillDetail', { billId: item.id })}
    >
      <AppCard style={styles.billCard}>
        <View style={styles.billRow}>
          <View>
            <Text style={styles.billTitle}>{item.title}</Text>
            <Text style={styles.billDue}>Due {item.due}</Text>
          </View>
          <StatusChip
            label={item.status === 'paid' ? 'Paid' : 'Unpaid'}
            status={item.status === 'paid' ? 'success' : 'danger'}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.billRow}>
          <View>
            <Text style={styles.label}>Total Amount</Text>
            <Text style={styles.amount}>{item.amount}</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.label}>Your Share</Text>
            <Text style={styles.myShare}>{item.myShare}</Text>
          </View>
        </View>
      </AppCard>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bills</Text>
      </View>

      <View style={styles.summaryCard}>
        <View>
          <Text style={styles.summaryLabel}>Total Outstanding</Text>
          <Text style={styles.summaryAmount}>RM 75.00</Text>
        </View>
        <View style={styles.summaryDivider} />
        <View>
          <Text style={styles.summaryLabel}>Paid This Month</Text>
          <Text style={[styles.summaryAmount, { color: colors.success }]}>RM 11.25</Text>
        </View>
      </View>

      <View style={styles.tabs}>
        {['all', 'unpaid', 'paid'].map((t) => (
          <TouchableOpacity
            key={t}
            style={[styles.tab, filter === t && styles.activeTab]}
            onPress={() => setFilter(t as any)}
          >
            <Text style={[styles.tabText, filter === t && styles.activeTabText]}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={MOCK_BILLS}
        renderItem={renderBill}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddBill')}
      >
        <Plus size={24} color={colors.white} />
      </TouchableOpacity>
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
  summaryCard: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    margin: layout.spacing.lg,
    marginTop: 0,
    padding: layout.spacing.lg,
    borderRadius: layout.borderRadius.lg,
    justifyContent: 'space-around',
  },
  summaryLabel: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
    marginBottom: 4,
  },
  summaryAmount: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  summaryDivider: {
    width: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: layout.spacing.lg,
    marginBottom: layout.spacing.md,
    gap: layout.spacing.md,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
  },
  activeTab: {
    backgroundColor: colors.text,
    borderColor: colors.text,
  },
  tabText: {
    ...typography.label,
    color: colors.text,
  },
  activeTabText: {
    color: colors.white,
  },
  list: {
    padding: layout.spacing.lg,
    gap: layout.spacing.md,
  },
  billCard: {
    marginBottom: layout.spacing.md,
  },
  billRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  billTitle: {
    ...typography.body,
    fontWeight: '600',
  },
  billDue: {
    ...typography.label,
    color: colors.textLight,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: layout.spacing.md,
  },
  label: {
    ...typography.label,
    color: colors.textLight,
  },
  amount: {
    ...typography.body,
    fontWeight: 'bold',
  },
  myShare: {
    ...typography.body,
    fontWeight: 'bold',
    color: colors.danger,
  },
  fab: {
    position: 'absolute',
    bottom: layout.spacing.lg,
    right: layout.spacing.lg,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...layout.shadow.medium,
  },
});
