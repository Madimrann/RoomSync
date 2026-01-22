import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeft, Heart, Send, ThumbsUp } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AppButton } from '../../components/AppButton';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { colors } from '../../theme/colors';
import { layout } from '../../theme/layout';
import { typography } from '../../theme/typography';

const MOCK_DETAIL = {
  id: '1',
  title: 'House Meeting',
  content: 'Hi everyone, we need to discuss the budget for next month. Electricity bill was higher than expected. Please share your availability for this weekend.',
  author: 'Adib',
  time: '2 hours ago',
  comments: [
    { id: 'c1', author: 'Sara', text: 'I am free on Saturday afternoon.', time: '1 hour ago' },
    { id: 'c2', author: 'John', text: 'Sunday works better for me.', time: '30 mins ago' },
  ]
};

export const AnnouncementDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [comment, setComment] = useState('');

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
        <Text style={styles.headerTitle}>Post</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.postCard}>
          <View style={styles.authorRow}>
            <View style={styles.avatar} />
            <View>
              <Text style={styles.authorName}>{MOCK_DETAIL.author}</Text>
              <Text style={styles.time}>{MOCK_DETAIL.time}</Text>
            </View>
          </View>

          <Text style={styles.title}>{MOCK_DETAIL.title}</Text>
          <Text style={styles.body}>{MOCK_DETAIL.content}</Text>

          <View style={styles.reactionRow}>
            <TouchableOpacity style={styles.reactionParams}><ThumbsUp size={16} color={colors.textLight} /><Text style={styles.reactionCount}>2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.reactionParams}><Heart size={16} color={colors.textLight} /><Text style={styles.reactionCount}>1</Text></TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionHeader}>Comments</Text>
        <View style={styles.commentList}>
          {MOCK_DETAIL.comments.map(c => (
            <View key={c.id} style={styles.commentItem}>
              <View style={[styles.avatar, { width: 24, height: 24 }]} />
              <View style={styles.commentContent}>
                <View style={styles.commentHeader}>
                  <Text style={styles.commentAuthor}>{c.author}</Text>
                  <Text style={styles.commentTime}>{c.time}</Text>
                </View>
                <Text style={styles.commentText}>{c.text}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write a comment..."
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity style={styles.sendBtn}>
          <Send size={20} color={colors.white} />
        </TouchableOpacity>
      </View>
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
  postCard: {
    backgroundColor: colors.card,
    padding: layout.spacing.lg,
    borderRadius: layout.borderRadius.lg,
    marginBottom: layout.spacing.xl,
    ...layout.shadow.small,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: layout.spacing.md,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    marginRight: layout.spacing.sm,
  },
  authorName: {
    ...typography.bodySmall,
    fontWeight: 'bold',
  },
  time: {
    ...typography.label,
    color: colors.textLight,
  },
  title: {
    ...typography.h2,
    marginBottom: layout.spacing.sm,
  },
  body: {
    ...typography.body,
    marginBottom: layout.spacing.lg,
    lineHeight: 24,
  },
  reactionRow: {
    flexDirection: 'row',
    gap: 16,
    paddingTop: layout.spacing.sm,
    borderTopWidth: 1,
    borderColor: colors.border,
  },
  reactionParams: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  reactionCount: {
    ...typography.label,
    color: colors.textLight,
  },
  sectionHeader: {
    ...typography.sectionHeader,
    marginBottom: layout.spacing.md,
  },
  commentList: {
    paddingBottom: layout.spacing.xl,
  },
  commentItem: {
    flexDirection: 'row',
    marginBottom: layout.spacing.lg,
  },
  commentContent: {
    flex: 1,
    marginLeft: layout.spacing.sm,
    backgroundColor: colors.card,
    padding: layout.spacing.md,
    borderRadius: layout.borderRadius.md,
    borderTopLeftRadius: 0,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  commentAuthor: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  commentTime: {
    fontSize: 10,
    color: colors.textLight,
  },
  commentText: {
    ...typography.bodySmall,
  },
  inputContainer: {
    padding: layout.spacing.md,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: colors.border,
  },
  input: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: 20,
    paddingHorizontal: layout.spacing.md,
    paddingVertical: 8,
    marginRight: layout.spacing.sm,
  },
  sendBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
