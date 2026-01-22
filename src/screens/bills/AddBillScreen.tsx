import { useNavigation } from '@react-navigation/native';
import { Receipt, X } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../../components/AppButton';
import { AppInput } from '../../components/AppInput';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { colors } from '../../theme/colors';
import { layout } from '../../theme/layout';
import { typography } from '../../theme/typography';

export const AddBillScreen = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState('');

  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Add Bill</Text>
        <AppButton
          title=""
          icon={<X size={24} color={colors.text} />}
          variant="ghost"
          onPress={() => navigation.goBack()}
          style={{ paddingHorizontal: 0 }}
        />
      </View>

      <ScrollView contentContainerStyle={styles.form}>
        <AppInput
          label="Bill Title"
          placeholder="e.g. WiFi January"
        />

        <AppInput
          label="Total Amount (RM)"
          placeholder="0.00"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
          style={{ fontSize: 24, fontWeight: 'bold', color: colors.primary }}
        />

        <AppInput label="Due Date" placeholder="Select date" />
        <AppInput label="Category" placeholder="Utilities, Rent, etc." />

        <Text style={styles.label}>Split Method</Text>
        <View style={styles.splitRow}>
          <AppButton title="Split Equally" variant="primary" size="sm" style={{ flex: 1, marginRight: 8 }} onPress={() => { }} />
          <AppButton title="Custom Amount" variant="outline" size="sm" style={{ flex: 1 }} onPress={() => { }} />
        </View>

        {/* Mock Split List */}
        <View style={styles.splitList}>
          <View style={styles.splitItem}>
            <Text>You</Text>
            <Text>RM {amount ? (parseFloat(amount) / 4).toFixed(2) : '0.00'}</Text>
          </View>
          <View style={styles.splitItem}>
            <Text>Adib</Text>
            <Text>RM {amount ? (parseFloat(amount) / 4).toFixed(2) : '0.00'}</Text>
          </View>
          <View style={styles.splitItem}>
            <Text>Sara</Text>
            <Text>RM {amount ? (parseFloat(amount) / 4).toFixed(2) : '0.00'}</Text>
          </View>
          <View style={styles.splitItem}>
            <Text>John</Text>
            <Text>RM {amount ? (parseFloat(amount) / 4).toFixed(2) : '0.00'}</Text>
          </View>
        </View>

        <AppButton
          title="Attach Receipt"
          variant="outline"
          icon={<Receipt size={20} color={colors.primary} />}
          onPress={() => { }}
          style={{ marginTop: layout.spacing.md }}
        />

      </ScrollView>

      <View style={styles.footer}>
        <AppButton title="Save Bill" onPress={() => navigation.goBack()} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: layout.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    ...typography.h2,
  },
  form: {
    padding: layout.spacing.lg,
  },
  label: {
    ...typography.label,
    marginBottom: layout.spacing.sm,
    marginTop: layout.spacing.sm,
  },
  splitRow: {
    flexDirection: 'row',
    marginBottom: layout.spacing.md,
  },
  splitList: {
    backgroundColor: colors.card,
    borderRadius: layout.borderRadius.md,
    padding: layout.spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  splitItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.background,
  },
  footer: {
    padding: layout.spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.white,
  },
});
