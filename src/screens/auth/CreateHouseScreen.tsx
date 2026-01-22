import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../../components/AppButton';
import { AppInput } from '../../components/AppInput';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { useAuth } from '../../context/AuthContext';
import { colors } from '../../theme/colors';
import { layout } from '../../theme/layout';

export const CreateHouseScreen = () => {
  const { createHouse } = useAuth();
  const [houseName, setHouseName] = useState('');
  const [currency, setCurrency] = useState('MYR');
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!houseName) return;
    setLoading(true);
    await createHouse(houseName);
    setLoading(false);
  };

  return (
    <ScreenWrapper scroll>
      <View style={styles.container}>
        <Text style={styles.title}>Create a House</Text>
        <Text style={styles.subtitle}>Give your shared home a name and set things up.</Text>

        <View style={styles.form}>
          <AppInput
            label="House Name"
            placeholder="e.g. The Chill Pad"
            value={houseName}
            onChangeText={setHouseName}
          />

          <AppInput
            label="Default Currency"
            placeholder="MYR, USD, etc."
            value={currency}
            onChangeText={setCurrency}
          />

          <AppButton
            title="Create House"
            onPress={handleCreate}
            loading={loading}
            disabled={!houseName}
            style={styles.button}
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
    marginTop: layout.spacing.md,
  },
});
