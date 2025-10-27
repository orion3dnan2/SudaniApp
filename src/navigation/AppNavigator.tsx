import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../auth/AuthContext';
import { useTheme } from '../hooks/ThemeContext';

import LoginScreen from '../auth/LoginScreen';
import SignUpScreen from '../auth/SignUpScreen';
import ForgotPasswordScreen from '../auth/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import StoreDetailsScreen from '../stores/StoreDetailsScreen';
import ProductDetailsScreen from '../stores/ProductDetailsScreen';
import ProfileScreen from '../profile/ProfileScreen';
import JobsScreen from '../jobs/JobsScreen';
import AddStoreScreen from '../stores/AddStoreScreen';
import { Text, View } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabIcon = ({ label, focused, color }: { label: string; focused: boolean; color: string }) => (
  <Text style={{ fontSize: 12, color }}>{label}</Text>
);

const MainTabs = () => {
  const { colors } = useTheme();
  
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => <TabIcon label="🏠" focused={focused} color={color} />,
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen 
        name="Jobs" 
        component={JobsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => <TabIcon label="💼" focused={focused} color={color} />,
          tabBarLabel: 'Jobs',
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => <TabIcon label="👤" focused={focused} color={color} />,
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  const { user, loading } = useAuth();
  const { colors } = useTheme();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
        <Text style={{ color: colors.text }}>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: colors.white,
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        {!user ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
          </>
        ) : (
          <>
            <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
            <Stack.Screen name="StoreDetails" component={StoreDetailsScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
            <Stack.Screen name="AddStore" component={AddStoreScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
