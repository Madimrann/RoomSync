import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeft, CheckCircle, Clock, Repeat } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../../components/AppButton';
import { AppCard } from '../../components/AppCard';
import { AvatarStack } from '../../components/AvatarStack';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { StatusChip } from '../../components/StatusChip';
import { colors } from '../../theme/colors';
import { layout } from '../../theme/layout';
import { typography } from '../../theme/typography';

export const ChoreDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Mock data based on ID (not actually fetching)
  const chore = {
    title: 'Vacuum Living Room',
    description: 'Make sure to get under the sofa as well.',
    assignees: [{ id: 'u1', name: 'Adib' }],
    dueDate: 'Today, 5:00 PM',
    repeat: 'Weekly',
    priority: 'High',
    status: 'Unassigned'
  };

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
        <Text style={styles.headerTitle}>Chore Details</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>{chore.title}</Text>
          <StatusChip label={chore.status} status={chore.status === 'Completed' ? 'success' : 'warning'} />
        </View>

        <AppCard style={styles.detailsCard}>
          <View style={styles.row}>
            <Text style={styles.label}>Assigned to</Text>
            <AvatarStack users={chore.assignees} size={32} />
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <View style={styles.iconRow}>
              <Clock size={16} color={colors.textLight} />
              <Text style={styles.value}>{chore.dueDate}</Text>
            </View>
            <View style={styles.iconRow}>
              <Repeat size={16} color={colors.textLight} />
              <Text style={styles.value}>{chore.repeat}</Text>
            </View>
          </View>
        </AppCard>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notes</Text>
          <Text style={styles.body}>{chore.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Activity</Text>
          <View style={styles.activityItem}>
            <Text style={styles.activityText}><Text style={{ fontWeight: 'bold' }}>Adib</Text> created this chore</Text>
            <Text style={styles.timeAgo}>2 hours ago</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <AppButton
          title="Mark as Done"
          icon={<CheckCircle size={20} color={colors.white} />}
          onPress={() => navigation.goBack()}
        />
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
  },
  headerTitle: {
    ...typography.sectionHeader,
  },
  content: {
    padding: layout.spacing.lg,
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: layout.spacing.lg,
  },
  title: {
    ...typography.h1,
    flex: 1,
    marginRight: layout.spacing.md,
  },
  detailsCard: {
    marginBottom: layout.spacing.lg,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: layout.spacing.sm,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: layout.spacing.sm,
  },
  label: {
    ...typography.label,
    color: colors.textLight,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  value: {
    ...typography.bodySmall,
  },
  section: {
    marginBottom: layout.spacing.xl,
  },
  sectionTitle: {
    ...typography.sectionHeader,
    marginBottom: layout.spacing.sm,
  },
  body: {
    ...typography.body,
    color: colors.textLight,
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: layout.spacing.sm,
  },
  activityText: {
    ...typography.bodySmall,
  },
  timeAgo: {
    ...typography.label,
  },
  footer: {
    padding: layout.spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.white,
  },
});
