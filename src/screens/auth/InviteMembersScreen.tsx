import { Copy, Share2 } from 'lucide-react-native';
import React from 'react';
import { Share, StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../../components/AppButton';
import { AppCard } from '../../components/AppCard';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { colors } from '../../theme/colors';
import { layout } from '../../theme/layout';

export const InviteMembersScreen = () => {
  const inviteCode = "ABCD-1234"; // Mock code

  const onShare = async () => {
    try {
      await Share.share({
        message: `Join my house on RoomSync with code: ${inviteCode}`,
      });
    } catch (error) {
      // alert(error.message);
    }
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Invite Members</Text>
        <Text style={styles.subtitle}>Share this code with your roommates to add them.</Text>

        <AppCard style={styles.codeCard}>
          <Text style={styles.codeLabel}>HOUSE CODE</Text>
          <Text style={styles.code}>{inviteCode}</Text>
          <AppButton
            title="Copy Code"
            onPress={() => { }}
            variant="ghost"
            size="sm"
            icon={<Copy size={16} color={colors.primary} />}
          />
        </AppCard>

        <AppButton
          title="Share Invite"
          onPress={onShare}
          icon={<Share2 size={20} color={colors.white} />}
          style={styles.shareButton}
        />

        <Text style={styles.sectionHeader}>Pending Invites</Text>
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No pending invites yet.</Text>
        </View>

      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: layout.spacing.xl,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: layout.spacing.xs,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textLight,
    marginBottom: layout.spacing.xl,
  },
  codeCard: {
    alignItems: 'center',
    padding: layout.spacing.xl,
    marginBottom: layout.spacing.xl,
  },
  codeLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.textLight,
    marginBottom: layout.spacing.xs,
    letterSpacing: 1,
  },
  code: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: layout.spacing.md,
    letterSpacing: 2,
  },
  shareButton: {
    marginBottom: layout.spacing.xl,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: layout.spacing.md,
    color: colors.text,
  },
  emptyState: {
    padding: layout.spacing.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: layout.borderRadius.md,
    borderStyle: 'dashed',
  },
  emptyText: {
    color: colors.textLight,
  },
});
