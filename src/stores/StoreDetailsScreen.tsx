import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { useTheme } from '../hooks/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Spacing, BorderRadius } from '../config/theme';

const StoreDetailsScreen = ({ route, navigation }: any) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const { storeId } = route.params;

  const mockStore = {
    id: storeId,
    name: 'مطعم الخرطوم',
    nameEn: 'Al Khartoum Restaurant',
    description: 'أصيل الطعم السوداني في الكويت',
    rating: 4.8,
    phone: '+96512345678',
    whatsapp: '+96512345678',
    address: 'Salmiya, Block 10, Street 5',
  };

  const mockProducts = [
    { id: '1', name: 'ملاح وكسرة', nameEn: 'Mulah & Kisra', price: 3.5, image: '🍲' },
    { id: '2', name: 'شاي سوداني', nameEn: 'Sudanese Tea', price: 0.5, image: '☕' },
    { id: '3', name: 'عصيدة', nameEn: 'Asida', price: 2.0, image: '🥣' },
  ];

  const openWhatsApp = () => {
    const url = `whatsapp://send?phone=${mockStore.whatsapp}`;
    Linking.openURL(url).catch(() => {
      alert('WhatsApp is not installed');
    });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    banner: {
      backgroundColor: colors.primary,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bannerIcon: {
      fontSize: 80,
    },
    content: {
      flex: 1,
    },
    storeInfo: {
      backgroundColor: colors.card,
      padding: Spacing.lg,
      borderBottomWidth: 1,
      borderColor: colors.border,
    },
    storeName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 4,
    },
    storeDescription: {
      fontSize: 16,
      color: colors.textSecondary,
      marginBottom: Spacing.sm,
    },
    storeRating: {
      fontSize: 18,
      color: colors.gold,
      marginBottom: Spacing.md,
    },
    actionButtons: {
      flexDirection: 'row',
      gap: Spacing.sm,
    },
    button: {
      flex: 1,
      backgroundColor: colors.primary,
      padding: Spacing.md,
      borderRadius: BorderRadius.md,
      alignItems: 'center',
    },
    whatsappButton: {
      backgroundColor: colors.success,
    },
    buttonText: {
      color: colors.white,
      fontSize: 14,
      fontWeight: 'bold',
    },
    section: {
      padding: Spacing.lg,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: Spacing.md,
    },
    productCard: {
      backgroundColor: colors.card,
      borderRadius: BorderRadius.md,
      padding: Spacing.md,
      marginBottom: Spacing.md,
      borderWidth: 1,
      borderColor: colors.border,
      flexDirection: 'row',
      alignItems: 'center',
    },
    productImage: {
      fontSize: 48,
      marginRight: Spacing.md,
    },
    productInfo: {
      flex: 1,
    },
    productName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 4,
    },
    productPrice: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.primary,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerIcon}>🍽️</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.storeInfo}>
          <Text style={styles.storeName}>{mockStore.name}</Text>
          <Text style={styles.storeDescription}>{mockStore.description}</Text>
          <Text style={styles.storeRating}>⭐ {mockStore.rating} (120 reviews)</Text>
          <Text style={[styles.storeDescription, { marginBottom: Spacing.md }]}>
            📍 {mockStore.address}
          </Text>

          <View style={styles.actionButtons}>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => Linking.openURL(`tel:${mockStore.phone}`)}
            >
              <Text style={styles.buttonText}>📞 {t('common.contact')}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, styles.whatsappButton]}
              onPress={openWhatsApp}
            >
              <Text style={styles.buttonText}>{t('common.openInWhatsApp')}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🍴 {t('stores.products')}</Text>
          {mockProducts.map((product) => (
            <TouchableOpacity 
              key={product.id} 
              style={styles.productCard}
              onPress={() => navigation.navigate('ProductDetails', { productId: product.id })}
            >
              <Text style={styles.productImage}>{product.image}</Text>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productName}>{product.nameEn}</Text>
              </View>
              <Text style={styles.productPrice}>{product.price} KD</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default StoreDetailsScreen;
