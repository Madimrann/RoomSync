import { ScanLine } from 'lucide-react-native'; // Optional icon
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../../components/AppButton';
import { AppInput } from '../../components/AppInput';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { useAuth } from '../../context/AuthContext';
import { colors } from '../../theme/colors';
import { layout } from '../../theme/layout';

export const JoinHouseScreen = () => {
  const { joinHouse } = useAuth();
  const [inviteCode, setInviteCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleJoin = async () => {
    if (!inviteCode) return;
    setLoading(true);
    await joinHouse(inviteCode);
    setLoading(false);
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Join a House</Text>
        <Text style={styles.subtitle}>Enter the invite code shared by your housemate.</Text>

        <View style={styles.form}>
          <AppInput
            label="Invite Code"
            placeholder="e.g. AB12CD"
            value={inviteCode}
            onChangeText={setInviteCode}
            autoCapitalize="characters"
          />

          <AppButton
            title="Join House"
            onPress={handleJoin}
            loading={loading}
            disabled={!inviteCode}
            style={styles.button}
          />

          <View style={styles.divider}>
            <Text style={styles.orText}>OR</Text>
          </View>

          <AppButton
            title="Scan QR Code"
            onPress={() => { }}
            variant="secondary"
            icon={<ScanLine size={20} color={colors.white} />}
          />
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
  form: {
    gap: layout.spacing.md,
  },
  button: {
    marginTop: layout.spacing.sm,
  },
  divider: {
    alignItems: 'center',
    marginVertical: layout.spacing.md,
  },
  orText: {
    color: colors.textLight,
    fontSize: 14,
  },
});
