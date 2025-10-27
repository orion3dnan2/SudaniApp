import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/auth/AuthContext';
import { ThemeProvider } from './src/hooks/ThemeContext';
import { AppNavigator } from './src/navigation/AppNavigator';
import './src/config/i18n';
import { I18nManager } from 'react-native';

export default function App() {
  useEffect(() => {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(false);
  }, []);

  return (
    <ThemeProvider>
      <AuthProvider>
        <StatusBar style="auto" />
        <AppNavigator />
      </AuthProvider>
    </ThemeProvider>
  );
}
