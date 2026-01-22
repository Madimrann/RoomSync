import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import { colors } from '../theme/colors';
import { layout } from '../theme/layout';
import { typography } from '../theme/typography';

interface AppInputProps extends TextInputProps {
    label?: string;
    error?: string;
    containerStyle?: ViewStyle;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const AppInput: React.FC<AppInputProps> = ({
    label,
    error,
    containerStyle,
    leftIcon,
    rightIcon,
    style,
    ...props
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {label && <Text style={styles.label}>{label}</Text>}

            <View style={[
                styles.inputContainer,
                !!error && styles.inputError
            ]}>
                {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

                <TextInput
                    style={[styles.input, style]}
                    placeholderTextColor={colors.textLight}
                    selectionColor={colors.primary}
                    {...props}
                />

                {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
            </View>

            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: layout.spacing.md,
    },
    label: {
        ...typography.label,
        marginBottom: layout.spacing.xs,
        color: colors.text,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: layout.borderRadius.md,
        height: 48,
        paddingHorizontal: layout.spacing.sm,
    },
    inputError: {
        borderColor: colors.danger,
    },
    input: {
        flex: 1,
        height: '100%',
        color: colors.text,
        ...typography.body,
        paddingHorizontal: layout.spacing.sm,
    },
    leftIcon: {
        marginRight: layout.spacing.xs,
    },
    rightIcon: {
        marginLeft: layout.spacing.xs,
    },
    errorText: {
        ...typography.label,
        color: colors.danger,
        marginTop: layout.spacing.xs,
    },
});
