import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, CheckCircle, DollarSign, RefreshCcw } from 'lucide-react-native';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../../components/AppButton';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { colors } from '../../theme/colors';
import { layout } from '../../theme/layout';
import { typography } from '../../theme/typography';

const MOCK_HISTORY = [
  { id: '1', type: 'chore', title: 'Adib completed: Clean bathroom', time: '2 hours ago' },
  { id: '2', type: 'bill', title: 'Sara paid: Electricity bill', time: '5 hours ago' },
  { id: '3', type: 'chore', title: 'John completed: Vacuum', time: 'Yesterday' },
  { id: '4', type: 'system', title: 'New bill added: WiFi', time: '2 days ago' },
];

export const HistoryScreen = () => {
  const navigation = useNavigation();

  const getIcon = (type: string) => {
    switch (type) {
      case 'chore': return <CheckCircle size={20} color={colors.success} />;
      case 'bill': return <DollarSign size={20} color={colors.warning} />;
      default: return <RefreshCcw size={20} color={colors.info} />;
    }
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.item}>
      <View style={[styles.iconContainer, { backgroundColor: item.type === 'chore' ? '#DCFCE7' : item.type === 'bill' ? '#FEF3C7' : '#EFF6FF' }]}>
        {getIcon(item.type)}
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

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
        <Text style={styles.headerTitle}>History</Text>
        <View style={{ width: 40 }} />
      </View>

      <FlatList
        data={MOCK_HISTORY}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
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
  list: {
    padding: layout.spacing.lg,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    padding: layout.spacing.md,
    marginBottom: layout.spacing.sm,
    borderRadius: layout.borderRadius.md,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: layout.spacing.md,
  },
  info: {
    flex: 1,
  },
  title: {
    ...typography.bodySmall,
    fontWeight: '500',
    marginBottom: 2,
  },
  time: {
    fontSize: 10,
    color: colors.textLight,
  },
});
