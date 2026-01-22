import { useNavigation } from '@react-navigation/native';
import { X } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../../components/AppButton';
import { AppInput } from '../../components/AppInput';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { colors } from '../../theme/colors';
import { layout } from '../../theme/layout';
import { typography } from '../../theme/typography';

export const AddChoreScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');

  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Chore</Text>
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
          label="Chore Title"
          placeholder="e.g. Wash the car"
          value={title}
          onChangeText={setTitle}
        />

        <AppInput
          label="Description (Optional)"
          placeholder="Add details..."
          multiline
          numberOfLines={3}
          style={{ height: 80, textAlignVertical: 'top' }}
        />

        <AppInput label="Assign To" placeholder="Select housemates" />
        <AppInput label="Due Date" placeholder="Select date" />

        {/* Priority Selection Mock */}
        <Text style={styles.label}>Priority</Text>
        <View style={styles.priorityRow}>
          {['Low', 'Medium', 'High'].map(p => (
            <AppButton
              key={p}
              title={p}
              variant="outline"
              size="sm"
              style={{ flex: 1, marginRight: 8 }}
              onPress={() => { }}
            />
          ))}
        </View>

      </ScrollView>

      <View style={styles.footer}>
        <AppButton title="Create Chore" onPress={() => navigation.goBack()} />
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
    marginBottom: layout.spacing.xs,
    marginTop: layout.spacing.sm,
  },
  priorityRow: {
    flexDirection: 'row',
    marginBottom: layout.spacing.lg,
  },
  footer: {
    padding: layout.spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.white,
  },
});
