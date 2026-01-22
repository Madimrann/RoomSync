import { TextStyle } from 'react-native';
import { colors } from './colors';

export const typography = {
    // Sizes
    size: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
        xxl: 24,
    },

    // Weights
    weight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
    } as const, // 'as const' to make TS happy with TextStyle fontWeight

    // Presets
    h1: {
        fontSize: 24,
        fontWeight: '600',
        color: colors.text,
    } as TextStyle,
    h2: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.text,
    } as TextStyle,
    h3: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.text,
    } as TextStyle,
    sectionHeader: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.text,
    } as TextStyle,
    body: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.text,
    } as TextStyle,
    bodySmall: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.text,
    } as TextStyle,
    label: {
        fontSize: 12,
        fontWeight: '500',
        color: colors.textLight,
    } as TextStyle,
};
