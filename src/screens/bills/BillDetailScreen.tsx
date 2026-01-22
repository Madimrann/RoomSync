import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeft, Check, Receipt } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../../components/AppButton';
import { AppCard } from '../../components/AppCard';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { StatusChip } from '../../components/StatusChip';
import { colors } from '../../theme/colors';
import { layout } from '../../theme/layout';
import { typography } from '../../theme/typography';

const MOCK_BILL_DETAILS = {
  title: 'WiFi January',
  amount: 'RM 120.00',
  dueDate: 'Jan 25',
  status: 'Unpaid',
  splitType: 'Equal Split',
  members: [
    { id: '1', name: 'Adib', amount: 'RM 30.00', status: 'paid' },
    { id: '2', name: 'Sara', amount: 'RM 30.00', status: 'unpaid' },
    { id: '3', name: 'You', amount: 'RM 30.00', status: 'unpaid' },
    { id: '4', name: 'John', amount: 'RM 30.00', status: 'unpaid' },
  ]
};

export const BillDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <AppButton
          title=""
          icon={<ArrowLeft size={24} color={colors.text} />}
          variant="ghost"
          onPress={() => navigation.goBack()}
          style={{ paddingHorizontal: 0, justifyContent: 'flex-start' }}
        />
        <Text style={styles.headerTitle}>Bill Details</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <AppCard style={styles.mainCard}>
          <View style={styles.topRow}>
            <Text style={styles.title}>{MOCK_BILL_DETAILS.title}</Text>
            <StatusChip label={MOCK_BILL_DETAILS.status} status="danger" />
          </View>
          <Text style={styles.amount}>{MOCK_BILL_DETAILS.amount}</Text>
          <Text style={styles.due}>Due on {MOCK_BILL_DETAILS.dueDate}</Text>
        </AppCard>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Split Breakdown</Text>
          <Text style={styles.sectionValidation}>{MOCK_BILL_DETAILS.splitType}</Text>
        </View>

        <View style={styles.list}>
          {MOCK_BILL_DETAILS.members.map((member) => (
            <View key={member.id} style={styles.memberRow}>
              <View style={styles.memberInfo}>
                <View style={styles.avatar}>
                  <Text style={styles.initial}>{member.name.charAt(0)}</Text>
                </View>
                <Text style={styles.memberName}>{member.name}</Text>
              </View>
              <View style={styles.memberStatus}>
                <Text style={styles.memberAmount}>{member.amount}</Text>
                {member.status === 'paid' ? (
                  <Text style={[styles.statusText, { color: colors.success }]}>Paid</Text>
                ) : (
                  <Text style={[styles.statusText, { color: colors.danger }]}>Unpaid</Text>
                )}
              </View>
            </View>
          ))}
        </View>

        <AppCard style={styles.receiptCard} variant="outlined">
          <View style={styles.receiptContent}>
            <Receipt size={24} color={colors.textLight} />
            <Text style={styles.receiptText}>No receipt attached</Text>
          </View>
          <AppButton title="Upload" size="sm" variant="ghost" onPress={() => { }} />
        </AppCard>

      </ScrollView>

      <View style={styles.footer}>
        <AppButton title="Mark as Paid" icon={<Check size={20} color={colors.white} />} onPress={() => { }} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: layout.spacing.md,
    justifyContent: 'space-between',
    backgroundColor: colors.background,
  },
  headerTitle: {
    ...typography.sectionHeader,
  },
  content: {
    padding: layout.spacing.lg,
  },
  mainCard: {
    marginBottom: layout.spacing.xl,
    padding: layout.spacing.xl,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: layout.spacing.sm,
  },
  title: {
    ...typography.h2,
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: layout.spacing.xs,
  },
  due: {
    ...typography.body,
    color: colors.textLight,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: layout.spacing.md,
  },
  sectionTitle: {
    ...typography.sectionHeader,
  },
  sectionValidation: {
    ...typography.label,
    color: colors.textLight,
  },
  list: {
    backgroundColor: colors.card,
    borderRadius: layout.borderRadius.lg,
    padding: layout.spacing.md,
    marginBottom: layout.spacing.lg,
    ...layout.shadow.small,
  },
  memberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.background,
  },
  memberInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: layout.spacing.md,
  },
  initial: {
    color: colors.white,
    fontWeight: 'bold',
  },
  memberName: {
    ...typography.body,
    fontWeight: '500',
  },
  memberStatus: {
    alignItems: 'flex-end',
  },
  memberAmount: {
    ...typography.body,
    fontWeight: '600',
  },
  statusText: {
    fontSize: 10,
    fontWeight: '600',
  },
  receiptCard: {
    marginBottom: layout.spacing.xl,
    borderStyle: 'dashed',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  receiptContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  receiptText: {
    color: colors.textLight,
  },
  footer: {
    padding: layout.spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.white,
  },
});
