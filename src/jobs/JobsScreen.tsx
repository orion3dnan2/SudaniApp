import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useTheme } from '../hooks/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Spacing, BorderRadius } from '../config/theme';

const JobsScreen = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const mockJobs = [
    { 
      id: '1', 
      title: 'Sales Representative', 
      titleAr: 'مندوب مبيعات',
      company: 'Al Khaleej Trading', 
      location: 'Kuwait City',
      salary: '400-600 KD',
      type: 'Full-time',
      posted: '2 days ago'
    },
    { 
      id: '2', 
      title: 'Chef', 
      titleAr: 'طباخ',
      company: 'Sudanese Restaurant', 
      location: 'Salmiya',
      salary: '350-500 KD',
      type: 'Full-time',
      posted: '3 days ago'
    },
    { 
      id: '3', 
      title: 'Driver', 
      titleAr: 'سائق',
      company: 'Transport Co.', 
      location: 'Hawally',
      salary: '300-400 KD',
      type: 'Full-time',
      posted: '5 days ago'
    },
    { 
      id: '4', 
      title: 'Waiter', 
      titleAr: 'نادل',
      company: 'Al Nile Restaurant', 
      location: 'Farwaniya',
      salary: '250-350 KD',
      type: 'Part-time',
      posted: '1 week ago'
    },
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
      marginBottom: Spacing.sm,
    },
    searchBar: {
      backgroundColor: colors.white,
      borderRadius: BorderRadius.lg,
      padding: Spacing.md,
      marginTop: Spacing.sm,
      fontSize: 16,
    },
    content: {
      flex: 1,
      padding: Spacing.lg,
    },
    jobCard: {
      backgroundColor: colors.card,
      borderRadius: BorderRadius.md,
      padding: Spacing.md,
      marginBottom: Spacing.md,
      borderWidth: 1,
      borderColor: colors.border,
    },
    jobHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: Spacing.sm,
    },
    jobTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
      flex: 1,
    },
    jobType: {
      backgroundColor: colors.primary,
      paddingHorizontal: Spacing.sm,
      paddingVertical: 4,
      borderRadius: BorderRadius.sm,
    },
    jobTypeText: {
      color: colors.white,
      fontSize: 12,
    },
    jobCompany: {
      fontSize: 16,
      color: colors.textSecondary,
      marginBottom: 4,
    },
    jobInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: Spacing.sm,
    },
    jobInfoText: {
      fontSize: 14,
      color: colors.textSecondary,
    },
    jobSalary: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.success,
    },
    postJobButton: {
      backgroundColor: colors.primary,
      padding: Spacing.md,
      borderRadius: BorderRadius.md,
      alignItems: 'center',
      margin: Spacing.lg,
    },
    postJobButtonText: {
      color: colors.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>💼 {t('jobs.findJobs')}</Text>
        <TextInput
          style={styles.searchBar}
          placeholder={t('common.search')}
          placeholderTextColor={colors.textSecondary}
        />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {mockJobs.map((job) => (
          <TouchableOpacity key={job.id} style={styles.jobCard}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <View style={styles.jobType}>
                <Text style={styles.jobTypeText}>{job.type}</Text>
              </View>
            </View>
            <Text style={styles.jobCompany}>🏢 {job.company}</Text>
            <View style={styles.jobInfo}>
              <Text style={styles.jobInfoText}>📍 {job.location}</Text>
              <Text style={styles.jobSalary}>{job.salary}</Text>
            </View>
            <Text style={styles.jobInfoText}>Posted {job.posted}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.postJobButton}>
        <Text style={styles.postJobButtonText}>+ {t('jobs.postJob')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobsScreen;
