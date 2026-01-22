import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors } from '../theme/colors';
import { layout } from '../theme/layout';
import { typography } from '../theme/typography';

export type ChipStatus = 'success' | 'warning' | 'danger' | 'info' | 'default';

interface StatusChipProps {
    label: string;
    status?: ChipStatus;
    style?: ViewStyle;
}

export const StatusChip: React.FC<StatusChipProps> = ({ label, status = 'default', style }) => {
    const getColors = () => {
        switch (status) {
            case 'success': return { bg: '#DCFCE7', text: '#166534' }; // Green-100/700
            case 'warning': return { bg: '#FEF3C7', text: '#92400E' }; // Amber-100/700
            case 'danger': return { bg: '#FEE2E2', text: '#991B1B' }; // Red-100/700
            case 'info': return { bg: '#DBEAFE', text: '#1E40AF' }; // Blue-100/700
            default: return { bg: colors.border, text: colors.text };
        }
    };

    const { bg, text } = getColors();

    return (
        <View style={[styles.container, { backgroundColor: bg }, style]}>
            <Text style={[styles.text, { color: text }]}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: layout.spacing.sm,
        paddingVertical: 2,
        borderRadius: layout.borderRadius.round,
        alignSelf: 'flex-start',
    },
    text: {
        ...typography.label,
        fontWeight: '600',
        fontSize: 10,
    },
});
