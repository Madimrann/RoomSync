import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../../components/AppButton';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { AuthStackParamList } from '../../navigation/types';
import { colors } from '../../theme/colors';
import { layout } from '../../theme/layout';
import { typography } from '../../theme/typography';

export const WelcomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>R</Text>
          </View>
          <Text style={styles.title}>Welcome to RoomSync</Text>
          <Text style={styles.subtitle}>
            Manage chores, split bills, and keep track of house announcements seamlessly.
          </Text>
        </View>

        <View style={styles.actions}>
          <AppButton
            title="Continue with Google"
            onPress={() => navigation.navigate('Login')} // Redirects to Login/Home
            style={styles.button}
            variant="secondary"
          />
          <AppButton
            title="Continue with Email"
            onPress={() => navigation.navigate('Login')}
            style={styles.button}
          />

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have a house code?</Text>
            <AppButton
              title="Join House"
              onPress={() => navigation.navigate('JoinHouse')}
              variant="ghost"
              size="sm"
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: layout.spacing.xl,
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: layout.spacing.lg,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
  },
  title: {
    ...typography.h1,
    textAlign: 'center',
    marginBottom: layout.spacing.md,
  },
  subtitle: {
    ...typography.body,
    textAlign: 'center',
    color: colors.textLight,
  },
  actions: {
    gap: layout.spacing.md,
    marginBottom: layout.spacing.xl,
  },
  button: {
    width: '100%',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: layout.spacing.md,
  },
  footerText: {
    ...typography.bodySmall,
    color: colors.textLight,
  },
});
