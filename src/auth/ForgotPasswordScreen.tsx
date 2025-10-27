import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useTheme } from '../hooks/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Spacing, BorderRadius } from '../config/theme';

const ForgotPasswordScreen = ({ navigation }: any) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        'Success',
        'Password reset email sent! Please check your inbox.',
        [{ text: 'OK', onPress: () => navigation.goBack() }]
      );
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
    setLoading(false);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      paddingTop: 60,
      paddingBottom: 40,
      backgroundColor: colors.primary,
      alignItems: 'center',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    },
    headerTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: colors.white,
      marginBottom: 8,
    },
    headerSubtitle: {
      fontSize: 14,
      color: colors.white,
      opacity: 0.9,
      textAlign: 'center',
      paddingHorizontal: 40,
    },
    content: {
      flex: 1,
      padding: Spacing.lg,
    },
    description: {
      fontSize: 16,
      color: colors.textSecondary,
      marginBottom: Spacing.lg,
      lineHeight: 24,
    },
    input: {
      backgroundColor: colors.card,
      borderRadius: BorderRadius.md,
      padding: Spacing.md,
      marginBottom: Spacing.md,
      fontSize: 16,
      color: colors.text,
      borderWidth: 1,
      borderColor: colors.border,
    },
    button: {
      backgroundColor: colors.primary,
      borderRadius: BorderRadius.md,
      padding: Spacing.md,
      alignItems: 'center',
      marginTop: Spacing.md,
    },
    buttonText: {
      color: colors.white,
      fontSize: 18,
      fontWeight: 'bold',
    },
    backButton: {
      alignSelf: 'center',
      marginTop: Spacing.lg,
    },
    backButtonText: {
      color: colors.primary,
      fontSize: 16,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t('common.forgotPassword')}</Text>
        <Text style={styles.headerSubtitle}>
          Enter your email to receive a password reset link
        </Text>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>
          We'll send you an email with instructions to reset your password.
        </Text>

        <TextInput
          style={styles.input}
          placeholder={t('common.email')}
          placeholderTextColor={colors.textSecondary}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />

        <TouchableOpacity 
          onPress={handleResetPassword} 
          style={styles.button} 
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Sending...' : 'Send Reset Link'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Back to Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ForgotPasswordScreen;
