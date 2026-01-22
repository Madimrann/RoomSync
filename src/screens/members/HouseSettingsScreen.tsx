import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { AppButton } from '../../components/AppButton';
import { AppInput } from '../../components/AppInput';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { colors } from '../../theme/colors';
import { layout } from '../../theme/layout';
import { typography } from '../../theme/typography';

export const HouseSettingsScreen = () => {
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
        <Text style={styles.headerTitle}>House Settings</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General</Text>
          <AppInput label="House Name" value="The Chill Pad" />
          <AppInput label="Currency" value="MYR" />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          <View style={styles.row}>
            <Text>Chore reminders</Text>
            <Switch value={true} />
          </View>
          <View style={styles.row}>
            <Text>Bill updates</Text>
            <Switch value={true} />
          </View>
        </View>

        <View style={[styles.section, { marginTop: layout.spacing.xxl }]}>
          <AppButton
            title="Delete House"
            variant="ghost"
            textStyle={{ color: colors.danger }}
            onPress={() => { }}
          />
        </View>

      </ScrollView>
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
  section: {
    marginBottom: layout.spacing.xl,
  },
  sectionTitle: {
    ...typography.label,
    marginBottom: layout.spacing.md,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
});
