import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../../components/AppButton';
import { AppCard } from '../../components/AppCard';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { colors } from '../../theme/colors';
import { layout } from '../../theme/layout';
import { typography } from '../../theme/typography';

export const MemberProfileScreen = () => {
  const navigation = useNavigation();

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
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Text style={styles.initials}>A</Text>
          </View>
          <Text style={styles.name}>Adib</Text>
          <Text style={styles.role}>Admin</Text>
        </View>

        <View style={styles.statsRow}>
          <AppCard style={styles.statCard}>
            <Text style={styles.statValue}>15</Text>
            <Text style={styles.statLabel}>Chores Done</Text>
          </AppCard>
          <AppCard style={styles.statCard}>
            <Text style={styles.statValue}>100%</Text>
            <Text style={styles.statLabel}>On Time</Text>
          </AppCard>
        </View>

        <AppButton title="Message" variant="outline" onPress={() => { }} style={{ marginTop: layout.spacing.xl }} />
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
  profileHeader: {
    alignItems: 'center',
    marginBottom: layout.spacing.xl,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: layout.spacing.md,
  },
  initials: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
  },
  name: {
    ...typography.h2,
  },
  role: {
    color: colors.textLight,
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row',
    gap: layout.spacing.md,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    padding: layout.spacing.lg,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textLight,
  },
});
