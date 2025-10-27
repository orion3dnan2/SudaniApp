import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native';
import { useAuth } from '../auth/AuthContext';
import { useTheme } from '../hooks/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Spacing, BorderRadius } from '../config/theme';

const ProfileScreen = () => {
  const { user, logout } = useAuth();
  const { colors, isDark, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', onPress: logout, style: 'destructive' },
      ]
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      backgroundColor: colors.primary,
      padding: Spacing.xl,
      paddingTop: 60,
      alignItems: 'center',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: Spacing.md,
    },
    avatarText: {
      fontSize: 32,
    },
    userName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.white,
      marginBottom: 4,
    },
    userEmail: {
      fontSize: 14,
      color: colors.white,
      opacity: 0.9,
    },
    content: {
      flex: 1,
      padding: Spacing.lg,
    },
    section: {
      marginBottom: Spacing.lg,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: Spacing.md,
    },
    menuItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.card,
      padding: Spacing.md,
      borderRadius: BorderRadius.md,
      marginBottom: Spacing.sm,
      borderWidth: 1,
      borderColor: colors.border,
    },
    menuItemText: {
      fontSize: 16,
      color: colors.text,
    },
    menuItemValue: {
      fontSize: 14,
      color: colors.textSecondary,
    },
    logoutButton: {
      backgroundColor: colors.error,
      padding: Spacing.md,
      borderRadius: BorderRadius.md,
      alignItems: 'center',
      marginTop: Spacing.lg,
    },
    logoutButtonText: {
      color: colors.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>👤</Text>
        </View>
        <Text style={styles.userName}>{user?.name}</Text>
        <Text style={styles.userEmail}>{user?.email}</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('profile.settings')}</Text>
          
          <TouchableOpacity style={styles.menuItem} onPress={toggleLanguage}>
            <Text style={styles.menuItemText}>{t('profile.language')}</Text>
            <Text style={styles.menuItemValue}>
              {i18n.language === 'ar' ? 'العربية' : 'English'}
            </Text>
          </TouchableOpacity>

          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>{t('profile.darkMode')}</Text>
            <Switch value={isDark} onValueChange={toggleTheme} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Activity</Text>
          
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>{t('profile.favorites')}</Text>
            <Text style={styles.menuItemValue}>12 items</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>{t('profile.recentViews')}</Text>
            <Text style={styles.menuItemValue}>8 items</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>{t('profile.logout')}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
