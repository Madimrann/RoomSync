import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';

interface ScreenWrapperProps {
    children: React.ReactNode;
    style?: ViewStyle;
    scroll?: boolean; // If true, wraps in ScrollView
}

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children, style, scroll = false }) => {
    const Content = scroll ? ScrollView : View;

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
            <Content
                style={[styles.content, style]}
                contentContainerStyle={scroll ? { flexGrow: 1 } : undefined}
            >
                {children}
            </Content>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        flex: 1,
    },
});
