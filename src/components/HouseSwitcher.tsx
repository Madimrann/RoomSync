import { ChevronDown, Home } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme/colors';
import { layout } from '../theme/layout';
import { typography } from '../theme/typography';

interface HouseSwitcherProps {
    houseName: string;
    onPress: () => void;
}

export const HouseSwitcher: React.FC<HouseSwitcherProps> = ({ houseName, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.iconContainer}>
                <Home size={16} color={colors.primary} />
            </View>
            <Text style={styles.text}>{houseName}</Text>
            <ChevronDown size={16} color={colors.textLight} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        padding: 6,
        paddingRight: 12, // More space for chevron
        borderRadius: layout.borderRadius.round,
        borderWidth: 1,
        borderColor: colors.border,
        ...layout.shadow.small,
    },
    iconContainer: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    text: {
        ...typography.bodySmall,
        fontWeight: '600',
        marginRight: 8,
    },
});
