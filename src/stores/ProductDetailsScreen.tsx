import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useTheme } from '../hooks/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Spacing, BorderRadius } from '../config/theme';

const ProductDetailsScreen = ({ route }: any) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const { productId } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  const mockProduct = {
    id: productId,
    name: 'ملاح وكسرة',
    nameEn: 'Mulah & Kisra',
    description: 'طبق تقليدي سوداني مع الملاح والكسرة الطازجة',
    descriptionEn: 'Traditional Sudanese dish with Mulah and fresh Kisra',
    price: 3.5,
    inStock: true,
    images: ['🍲'],
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    Alert.alert(
      isFavorite ? 'Removed from favorites' : 'Added to favorites',
      mockProduct.nameEn
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    imageContainer: {
      height: 300,
      backgroundColor: colors.card,
      justifyContent: 'center',
      alignItems: 'center',
    },
    productImage: {
      fontSize: 120,
    },
    favoriteButton: {
      position: 'absolute',
      top: 20,
      right: 20,
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    favoriteIcon: {
      fontSize: 24,
    },
    content: {
      flex: 1,
      padding: Spacing.lg,
    },
    header: {
      marginBottom: Spacing.lg,
    },
    productName: {
      fontSize: 28,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 4,
    },
    productPrice: {
      fontSize: 32,
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: Spacing.md,
    },
    stockStatus: {
      fontSize: 16,
      color: colors.success,
      marginBottom: Spacing.lg,
    },
    section: {
      marginBottom: Spacing.lg,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: Spacing.sm,
    },
    description: {
      fontSize: 16,
      color: colors.textSecondary,
      lineHeight: 24,
    },
    addToCartButton: {
      backgroundColor: colors.primary,
      padding: Spacing.md,
      borderRadius: BorderRadius.md,
      alignItems: 'center',
      marginTop: Spacing.lg,
    },
    addToCartButtonText: {
      color: colors.white,
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.productImage}>{mockProduct.images[0]}</Text>
        <TouchableOpacity style={styles.favoriteButton} onPress={toggleFavorite}>
          <Text style={styles.favoriteIcon}>{isFavorite ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.productName}>{mockProduct.name}</Text>
          <Text style={styles.productName}>{mockProduct.nameEn}</Text>
          <Text style={styles.productPrice}>{mockProduct.price} KD</Text>
          <Text style={styles.stockStatus}>
            {mockProduct.inStock ? '✅ In Stock' : '❌ Out of Stock'}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{mockProduct.description}</Text>
          <Text style={[styles.description, { marginTop: 8 }]}>{mockProduct.descriptionEn}</Text>
        </View>

        <TouchableOpacity 
          style={styles.addToCartButton}
          onPress={() => Alert.alert('Added to Cart', mockProduct.nameEn)}
        >
          <Text style={styles.addToCartButtonText}>🛒 Add to Cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProductDetailsScreen;
