import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ArrowUpDown, Filter, Plus } from 'lucide-react-native';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AvatarStack } from '../../components/AvatarStack';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { StatusChip } from '../../components/StatusChip';
import { RootStackParamList } from '../../navigation/types';
import { colors } from '../../theme/colors';
import { layout } from '../../theme/layout';
import { typography } from '../../theme/typography';

const MOCK_CHORES = [
  { id: '1', title: 'Vacuum Living Room', assignee: [{ id: 'u1', name: 'Adib' }], due: 'Today, 5 PM', priority: 'high', status: 'pending' },
  { id: '2', title: 'Wash Dishes', assignee: [{ id: 'u2', name: 'Sara' }], due: 'Tonight', priority: 'med', status: 'pending' },
  { id: '3', title: 'Clean Bathroom', assignee: [], due: 'Tomorrow', priority: 'low', status: 'pending' },
];

export const ChoresListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [filter, setFilter] = useState<'all' | 'mine' | 'completed'>('all');

  const renderChore = ({ item }: { item: any }) => (
    <View style={styles.choreItem}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => { }} // Mark done logic
      />
      <TouchableOpacity
        style={styles.choreContent}
        onPress={() => navigation.navigate('ChoreDetail', { choreId: item.id })}
      >
        <View style={styles.choreRow}>
          <Text style={styles.choreTitle}>{item.title}</Text>
          <StatusChip label={item.priority} status={item.priority === 'high' ? 'danger' : item.priority === 'med' ? 'warning' : 'info'} />
        </View>
        <View style={styles.choreFooter}>
          <AvatarStack users={item.assignee.length > 0 ? item.assignee : [{ id: '?', name: 'Unassigned' }]} size={24} />
          <Text style={styles.choreDue}>{item.due}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chores</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.iconBtn}><Filter size={20} color={colors.text} /></TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}><ArrowUpDown size={20} color={colors.text} /></TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, filter === 'all' && styles.activeTab]}
          onPress={() => setFilter('all')}
        >
          <Text style={[styles.tabText, filter === 'all' && styles.activeTabText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, filter === 'mine' && styles.activeTab]}
          onPress={() => setFilter('mine')}
        >
          <Text style={[styles.tabText, filter === 'mine' && styles.activeTabText]}>My Chores</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, filter === 'completed' && styles.activeTab]}
          onPress={() => setFilter('completed')}
        >
          <Text style={[styles.tabText, filter === 'completed' && styles.activeTabText]}>Completed</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={MOCK_CHORES}
        renderItem={renderChore}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddChore')}
      >
        <Plus size={24} color={colors.white} />
        <Text style={styles.fabText}>Add Chore</Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: layout.spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  headerTitle: {
    ...typography.h1,
  },
  headerActions: {
    flexDirection: 'row',
    gap: layout.spacing.md,
  },
  iconBtn: {
    padding: 8,
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: layout.spacing.lg,
    marginBottom: layout.spacing.md,
    gap: layout.spacing.md,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: colors.white, // Inactive bg
    borderWidth: 1,
    borderColor: colors.border,
  },
  activeTab: {
    backgroundColor: colors.text,
    borderColor: colors.text,
  },
  tabText: {
    ...typography.label,
    color: colors.text,
  },
  activeTabText: {
    color: colors.white,
  },
  list: {
    padding: layout.spacing.lg,
    gap: layout.spacing.md,
  },
  choreItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    padding: layout.spacing.md,
    borderRadius: layout.borderRadius.md,
    ...layout.shadow.small,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.border,
    marginRight: layout.spacing.md,
  },
  choreContent: {
    flex: 1,
  },
  choreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  choreTitle: {
    ...typography.body,
    fontWeight: '500',
  },
  choreFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  choreDue: {
    ...typography.label,
    color: colors.textLight,
  },
  fab: {
    position: 'absolute',
    bottom: layout.spacing.lg,
    right: layout.spacing.lg,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    ...layout.shadow.medium,
  },
  fabText: {
    color: colors.white,
    fontWeight: '600',
    marginLeft: 8,
  },
});
