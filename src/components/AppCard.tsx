import React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import { colors } from '../theme/colors';
import { layout } from '../theme/layout';

interface AppCardProps extends ViewProps {
    children: React.ReactNode;
    style?: ViewStyle;
    variant?: 'elevated' | 'flat' | 'outlined';
    padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const AppCard: React.FC<AppCardProps> = ({
    children,
    style,
    variant = 'elevated',
    padding = 'md',
    ...props
}) => {
    const getPadding = () => {
        switch (padding) {
            case 'none': return 0;
            case 'sm': return layout.spacing.sm;
            case 'md': return layout.spacing.md;
            case 'lg': return layout.spacing.lg;
            default: return layout.spacing.md;
        }
    };

    return (
        <View
            style={[
                styles.container,
                variant === 'elevated' && layout.shadow.small,
                variant === 'outlined' && styles.outlined,
                variant === 'flat' && { backgroundColor: 'transparent' },
                { padding: getPadding() },
                style,
            ]}
            {...props}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.card,
        borderRadius: layout.borderRadius.lg,
    },
    outlined: {
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: 'transparent',
    },
});
