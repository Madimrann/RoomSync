import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MessageCircle, Pin, Plus } from 'lucide-react-native';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppCard } from '../../components/AppCard';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { RootStackParamList } from '../../navigation/types';
import { colors } from '../../theme/colors';
import { layout } from '../../theme/layout';
import { typography } from '../../theme/typography';

const MOCK_ANNOUNCEMENTS = [
  { id: '1', title: 'House Meeting', content: 'Discussing budget for next month.', author: 'Adib', time: '2 hours ago', pinned: true, comments: 4, tag: 'Meeting' },
  { id: '2', title: 'Plumbing Issue', content: 'Sink is leaking, plumber coming tomorrow at 10am.', author: 'Sara', time: '1 day ago', pinned: false, comments: 2, tag: 'Maintenance' },
];

export const AnnouncementsFeedScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('AnnouncementDetail', { announcementId: item.id })}
    >
      <AppCard style={styles.card}>
        <View style={styles.headerRow}>
          <View style={styles.tagContainer}>
            <Text style={styles.tag}>{item.tag}</Text>
          </View>
          {item.pinned && <Pin size={16} color={colors.warning} style={{ transform: [{ rotate: '45deg' }] }} />}
        </View>

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.preview} numberOfLines={2}>{item.content}</Text>

        <View style={styles.footerRow}>
          <View style={styles.authorInfo}>
            <View style={styles.avatar} />
            <Text style={styles.authorText}>{item.author} • {item.time}</Text>
          </View>
          <View style={styles.commentInfo}>
            <MessageCircle size={16} color={colors.textLight} />
            <Text style={styles.commentCount}>{item.comments}</Text>
          </View>
        </View>
      </AppCard>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Announcements</Text>
      </View>

      <FlatList
        data={MOCK_ANNOUNCEMENTS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('CreateAnnouncement')}
      >
        <Plus size={24} color={colors.white} />
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: layout.spacing.lg,
    backgroundColor: colors.background,
  },
  headerTitle: {
    ...typography.h1,
  },
  list: {
    padding: layout.spacing.lg,
    gap: layout.spacing.md,
  },
  card: {
    padding: layout.spacing.lg,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: layout.spacing.sm,
  },
  tagContainer: {
    backgroundColor: colors.background,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  tag: {
    ...typography.label,
    color: colors.textLight,
    fontWeight: '600',
  },
  title: {
    ...typography.h3, // Need to add h3 or use h2
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: colors.text,
  },
  preview: {
    ...typography.bodySmall,
    color: colors.textLight,
    marginBottom: layout.spacing.md,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
    marginRight: 8,
  },
  authorText: {
    ...typography.label,
    color: colors.textLight,
  },
  commentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  commentCount: {
    ...typography.label,
    color: colors.textLight,
  },
  fab: {
    position: 'absolute',
    bottom: layout.spacing.lg,
    right: layout.spacing.lg,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...layout.shadow.medium,
  },
});
