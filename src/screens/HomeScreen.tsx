import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { useTheme } from '../hooks/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Spacing, BorderRadius } from '../config/theme';

const HomeScreen = ({ navigation }: any) => {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const mockStores = [
    { id: '1', name: 'مطعم الخرطوم', category: 'Restaurant', rating: 4.8, image: '🍽️' },
    { id: '2', name: 'بقالة السودان', category: 'Grocery', rating: 4.5, image: '🛒' },
    { id: '3', name: 'مخبز النيل', category: 'Bakery', rating: 4.9, image: '🥖' },
  ];

  const mockJobs = [
    { id: '1', title: 'Sales Representative', company: 'Al Khaleej Trading', location: 'Kuwait City' },
    { id: '2', title: 'Chef', company: 'Sudanese Restaurant', location: 'Salmiya' },
    { id: '3', title: 'Driver', company: 'Transport Co.', location: 'Hawally' },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      backgroundColor: colors.primary,
      padding: Spacing.lg,
      paddingTop: 50,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    headerTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: colors.white,
      marginBottom: 4,
    },
    headerSubtitle: {
      fontSize: 14,
      color: colors.white,
      opacity: 0.9,
    },
    searchBar: {
      backgroundColor: colors.white,
      borderRadius: BorderRadius.lg,
      padding: Spacing.md,
      marginTop: Spacing.md,
      fontSize: 16,
    },
    content: {
      flex: 1,
    },
    section: {
      padding: Spacing.lg,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: Spacing.md,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.text,
    },
    viewAll: {
      color: colors.primary,
      fontSize: 14,
    },
    storeCard: {
      backgroundColor: colors.card,
      borderRadius: BorderRadius.md,
      padding: Spacing.md,
      marginRight: Spacing.md,
      width: 160,
      borderWidth: 1,
      borderColor: colors.border,
    },
    storeImage: {
      fontSize: 48,
      textAlign: 'center',
      marginBottom: Spacing.sm,
    },
    storeName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 4,
    },
    storeCategory: {
      fontSize: 12,
      color: colors.textSecondary,
      marginBottom: 4,
    },
    storeRating: {
      fontSize: 14,
      color: colors.gold,
    },
    jobCard: {
      backgroundColor: colors.card,
      borderRadius: BorderRadius.md,
      padding: Spacing.md,
      marginBottom: Spacing.md,
      borderWidth: 1,
      borderColor: colors.border,
    },
    jobTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 4,
    },
    jobCompany: {
      fontSize: 14,
      color: colors.textSecondary,
      marginBottom: 2,
    },
    jobLocation: {
      fontSize: 12,
      color: colors.primary,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🏠 البيت السوداني</Text>
        <Text style={styles.headerSubtitle}>Connecting Sudanese Community in Kuwait</Text>
        <TextInput
          style={styles.searchBar}
          placeholder={t('common.search')}
          placeholderTextColor={colors.textSecondary}
        />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>⭐ {t('home.topStores')}</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>{t('common.viewAll')}</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {mockStores.map((store) => (
              <TouchableOpacity
                key={store.id}
                style={styles.storeCard}
                onPress={() => navigation.navigate('StoreDetails', { storeId: store.id })}
              >
                <Text style={styles.storeImage}>{store.image}</Text>
                <Text style={styles.storeName}>{store.name}</Text>
                <Text style={styles.storeCategory}>{store.category}</Text>
                <Text style={styles.storeRating}>⭐ {store.rating}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>💼 {t('home.jobsForSudanese')}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Jobs')}>
              <Text style={styles.viewAll}>{t('common.viewAll')}</Text>
            </TouchableOpacity>
          </View>
          {mockJobs.map((job) => (
            <TouchableOpacity key={job.id} style={styles.jobCard}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.jobCompany}>{job.company}</Text>
              <Text style={styles.jobLocation}>📍 {job.location}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
