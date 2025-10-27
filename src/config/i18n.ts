import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      common: {
        welcome: 'Welcome to Bayt Al Sudani',
        login: 'Login',
        signup: 'Sign Up',
        email: 'Email',
        password: 'Password',
        forgotPassword: 'Forgot Password?',
        or: 'OR',
        continueWithGoogle: 'Continue with Google',
        search: 'Search...',
        viewAll: 'View All',
        addToFavorites: 'Add to Favorites',
        contact: 'Contact',
        location: 'Location',
        openInWhatsApp: 'Open in WhatsApp',
      },
      home: {
        topStores: 'Top Stores',
        nearbyRestaurants: 'Nearby Restaurants',
        jobsForSudanese: 'Jobs for Sudanese',
        trendingServices: 'Trending Services',
      },
      profile: {
        myProfile: 'My Profile',
        settings: 'Settings',
        language: 'Language',
        darkMode: 'Dark Mode',
        favorites: 'Favorites',
        recentViews: 'Recent Views',
        logout: 'Logout',
      },
      stores: {
        storeDetails: 'Store Details',
        products: 'Products',
        about: 'About',
        addStore: 'Add Store',
      },
      jobs: {
        postJob: 'Post a Job',
        findJobs: 'Find Jobs',
        jobDetails: 'Job Details',
      },
    },
  },
  ar: {
    translation: {
      common: {
        welcome: 'مرحباً بكم في البيت السوداني',
        login: 'تسجيل الدخول',
        signup: 'إنشاء حساب',
        email: 'البريد الإلكتروني',
        password: 'كلمة المرور',
        forgotPassword: 'نسيت كلمة المرور؟',
        or: 'أو',
        continueWithGoogle: 'متابعة باستخدام جوجل',
        search: 'بحث...',
        viewAll: 'عرض الكل',
        addToFavorites: 'إضافة للمفضلة',
        contact: 'تواصل',
        location: 'الموقع',
        openInWhatsApp: 'فتح في واتساب',
      },
      home: {
        topStores: 'أفضل المتاجر',
        nearbyRestaurants: 'مطاعم قريبة',
        jobsForSudanese: 'وظائف للسودانيين',
        trendingServices: 'خدمات رائجة',
      },
      profile: {
        myProfile: 'حسابي',
        settings: 'الإعدادات',
        language: 'اللغة',
        darkMode: 'الوضع الليلي',
        favorites: 'المفضلة',
        recentViews: 'المشاهدات الأخيرة',
        logout: 'تسجيل الخروج',
      },
      stores: {
        storeDetails: 'تفاصيل المتجر',
        products: 'المنتجات',
        about: 'حول',
        addStore: 'إضافة متجر',
      },
      jobs: {
        postJob: 'نشر وظيفة',
        findJobs: 'البحث عن وظائف',
        jobDetails: 'تفاصيل الوظيفة',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
