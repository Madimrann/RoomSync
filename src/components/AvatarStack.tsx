import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

interface AvatarStackProps {
    users: Array<{ id: string; name: string; avatarUrl?: string }>;
    max?: number;
    size?: number;
}

export const AvatarStack: React.FC<AvatarStackProps> = ({ users, max = 3, size = 32 }) => {
    const visibleUsers = users.slice(0, max);
    const remaining = users.length - max;

    return (
        <View style={styles.container}>
            {visibleUsers.map((user, index) => (
                <View
                    key={user.id}
                    style={[
                        styles.avatar,
                        {
                            width: size,
                            height: size,
                            borderRadius: size / 2,
                            marginLeft: index === 0 ? 0 : -size / 3,
                            zIndex: visibleUsers.length - index,
                            backgroundColor: colors.primary, // Fallback
                        },
                    ]}
                >
                    {/* Placeholder for real image */}
                    <Text style={[styles.initials, { fontSize: size / 2.5 }]}>
                        {user.name.charAt(0)}
                    </Text>
                </View>
            ))}
            {remaining > 0 && (
                <View
                    style={[
                        styles.avatar,
                        styles.remaining,
                        {
                            width: size,
                            height: size,
                            borderRadius: size / 2,
                            marginLeft: -size / 3,
                            zIndex: 0,
                        },
                    ]}
                >
                    <Text style={[styles.remainingText, { fontSize: size / 2.5 }]}>+{remaining}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        borderWidth: 2,
        borderColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cbd5e1', // Slate-300
    },
    initials: {
        color: colors.white,
        fontWeight: '600',
    },
    remaining: {
        backgroundColor: colors.background,
        borderColor: colors.white,
    },
    remainingText: {
        color: colors.textLight,
        fontWeight: '600',
    },
});
