import { useNavigation } from '@react-navigation/native';
import { Image as ImageIcon, X } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { AppButton } from '../../components/AppButton';
import { AppInput } from '../../components/AppInput';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { colors } from '../../theme/colors';
import { layout } from '../../theme/layout';
import { typography } from '../../theme/typography';

export const CreateAnnouncementScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [isPinned, setIsPinned] = useState(false);

  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Post</Text>
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
          label="Title"
          placeholder="Subject..."
          value={title}
          onChangeText={setTitle}
        />

        <AppInput
          label="Message"
          placeholder="What's on your mind?"
          multiline
          style={{ height: 120, textAlignVertical: 'top' }}
          value={message}
          onChangeText={setMessage}
        />

        <Text style={styles.label}>Category</Text>
        <View style={styles.tagRow}>
          {['General', 'Maintenance', 'Party', 'Rule'].map(tag => (
            <AppButton
              key={tag}
              title={tag}
              variant="outline"
              size="sm"
              style={{ marginRight: 8, marginBottom: 8 }}
              onPress={() => { }}
            />
          ))}
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Pin to top</Text>
          <Switch
            value={isPinned}
            onValueChange={setIsPinned}
            trackColor={{ false: colors.border, true: colors.primary }}
          />
        </View>

        <AppButton
          title="Attach Image"
          variant="outline"
          icon={<ImageIcon size={20} color={colors.primary} />}
          onPress={() => { }}
          style={{ marginTop: layout.spacing.md }}
        />

      </ScrollView>

      <View style={styles.footer}>
        <AppButton title="Post Announcement" onPress={() => navigation.goBack()} />
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
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: layout.spacing.lg,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: layout.spacing.md,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  switchLabel: {
    ...typography.body,
  },
  footer: {
    padding: layout.spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.white,
  },
});
