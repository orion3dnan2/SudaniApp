# 🏠 Bayt Al Sudani (البيت السوداني)

**A marketplace and community platform connecting Sudanese users in Kuwait and GCC countries**

Built with **React Native**, **Expo SDK 52**, **TypeScript**, and **Firebase**

---

## 📱 Overview

Bayt Al Sudani is a comprehensive mobile application that serves as a digital hub for the Sudanese community in Kuwait and the GCC region. The app provides:

- **🛍️ Marketplace**: Browse and purchase from Sudanese stores and restaurants
- **💼 Jobs**: Find employment opportunities tailored for Sudanese professionals
- **📋 Services**: Discover and offer community services
- **💬 Communication**: Integrated WhatsApp for instant contact with merchants
- **🌍 Multi-language**: Full Arabic (RTL) and English support
- **🌙 Dark Mode**: Beautiful UI with light and dark themes

---

## 🎨 Features

### Core Features
✅ **Authentication Flow**
- Email/Password sign up and login
- Password recovery
- Google Sign-In ready (integration pending)

✅ **Home Screen**
- Top Stores showcase
- Nearby Restaurants
- Jobs for Sudanese
- Trending Services
- Smart search functionality

✅ **Store & Product Pages**
- Detailed store profiles with ratings
- Product listings with images and prices
- Direct WhatsApp contact
- Phone call integration
- Add to favorites

✅ **Jobs Section**
- Browse available positions
- Filter by location and type
- Post new job listings
- Contact employers directly

✅ **Profile Management**
- User settings
- Language switcher (العربية ↔️ English)
- Dark mode toggle
- Favorites and recent views

✅ **Merchant Tools**
- Add new stores
- Post job listings
- Manage advertisements

---

## 🗂️ Project Structure

```
bayt-al-sudani/
├── App.tsx                      # Main app entry point
├── src/
│   ├── auth/                    # Authentication module
│   │   ├── AuthContext.tsx      # Auth state management
│   │   ├── LoginScreen.tsx      # Login UI
│   │   └── SignUpScreen.tsx     # Registration UI
│   ├── stores/                  # Stores & products module
│   │   ├── StoreDetailsScreen.tsx
│   │   ├── ProductDetailsScreen.tsx
│   │   └── AddStoreScreen.tsx
│   ├── jobs/                    # Jobs module
│   │   └── JobsScreen.tsx
│   ├── profile/                 # Profile module
│   │   └── ProfileScreen.tsx
│   ├── screens/                 # Main screens
│   │   └── HomeScreen.tsx
│   ├── navigation/              # Navigation setup
│   │   └── AppNavigator.tsx
│   ├── config/                  # App configuration
│   │   ├── firebase.ts          # Firebase setup
│   │   ├── i18n.ts              # Multi-language config
│   │   └── theme.ts             # Color & styling theme
│   ├── hooks/                   # Custom React hooks
│   │   └── useTheme.ts
│   ├── types/                   # TypeScript types
│   │   └── index.ts
│   ├── components/              # Reusable components
│   ├── chat/                    # Chat module (future)
│   ├── admin/                   # Admin panel (future)
│   └── utils/                   # Utility functions
├── assets/                      # Images, fonts, icons
├── package.json
├── tsconfig.json
└── app.json                     # Expo configuration
```

---

## 🔐 Test Accounts

**Ready to test?** Use these demo accounts to try the app without Firebase setup:

| Role | Email | Password |
|------|-------|----------|
| 👑 **Admin** | `admin@baytalSudani.com` | `Admin@123` |
| 🏪 **Merchant** | `merchant@baytalSudani.com` | `Merchant@123` |
| 👤 **User** | `user@baytalSudani.com` | `User@123` |

> **Note:** These accounts work in demo mode without Firebase configuration. Perfect for testing!

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ and npm
- **Expo CLI** (installed automatically)
- **Firebase Account** (for backend - optional for testing)
- **Google Maps API Key** (optional, for maps)

### Installation

1. **Clone or open this project in Replit**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Firebase Configuration
   EXPO_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id

   # Google Maps API Key (optional)
   EXPO_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key

   # WhatsApp Business Number
   EXPO_PUBLIC_WHATSAPP_PHONE_NUMBER=+965XXXXXXXX
   ```

4. **Set up Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable **Authentication** (Email/Password, Google)
   - Create a **Firestore Database**
   - Set up **Storage** for images
   - Copy your config values to `.env`

5. **Run the app**
   ```bash
   npm run web          # Web version (recommended for Replit)
   npm start            # Start Expo dev server
   npm run android      # Android (requires emulator)
   npm run ios          # iOS (requires Mac)
   ```

---

## 🔥 Firebase Setup

### Firestore Collections

Create the following collections in your Firebase Firestore:

#### `users`
```javascript
{
  id: string,
  email: string,
  name: string,
  phone?: string,
  photoURL?: string,
  role: 'user' | 'merchant' | 'admin',
  createdAt: timestamp
}
```

#### `stores`
```javascript
{
  id: string,
  name: string,
  nameAr: string,
  description: string,
  descriptionAr: string,
  category: string,
  imageUrl: string,
  bannerUrl?: string,
  ownerId: string,
  rating: number,
  location: {
    latitude: number,
    longitude: number,
    address: string,
    addressAr: string,
    city: string,
    country: string
  },
  phone: string,
  whatsapp?: string,
  createdAt: timestamp
}
```

#### `products`
```javascript
{
  id: string,
  storeId: string,
  name: string,
  nameAr: string,
  description: string,
  descriptionAr: string,
  price: number,
  currency: string,
  images: string[],
  category: string,
  inStock: boolean,
  createdAt: timestamp
}
```

#### `jobs`
```javascript
{
  id: string,
  title: string,
  titleAr: string,
  description: string,
  descriptionAr: string,
  company: string,
  location: {
    latitude: number,
    longitude: number,
    address: string,
    addressAr: string,
    city: string,
    country: string
  },
  salary?: {
    min: number,
    max: number,
    currency: string
  },
  type: 'full-time' | 'part-time' | 'contract',
  postedBy: string,
  contactPhone: string,
  createdAt: timestamp
}
```

### Firestore Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users
    match /users/{userId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Stores
    match /stores/{storeId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && 
                               resource.data.ownerId == request.auth.uid;
    }
    
    // Products
    match /products/{productId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Jobs
    match /jobs/{jobId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

---

## 🎨 Design & Theming

### Color Palette (Sudanese Theme)
- **Primary**: Brown `#8B4513` - Represents Sudan's traditional colors
- **Secondary**: Gold `#DAA520` - Accent color
- **Success**: Green `#2E7D32` - For positive actions
- **Background**: White/Dark based on theme
- **Text**: Adaptive based on theme

### Typography
- **Headings**: Bold, large sizes for hierarchy
- **Body**: Clean, readable fonts
- **Arabic Support**: RTL layout with proper text alignment

---

## 📦 Dependencies

### Core
- `expo` - Universal React framework
- `react-native` - Mobile framework
- `typescript` - Type safety

### Navigation
- `@react-navigation/native` - Navigation framework
- `@react-navigation/stack` - Stack navigator
- `@react-navigation/bottom-tabs` - Tab navigator

### Backend
- `firebase` - Authentication, Firestore, Storage

### Utilities
- `i18next` & `react-i18next` - Internationalization
- `@react-native-async-storage/async-storage` - Local storage
- `react-native-maps` - Map integration (optional)

---

## 🌍 Internationalization (i18n)

The app supports **Arabic (default)** and **English**:

- Switch language from Profile settings
- RTL (Right-to-Left) support for Arabic
- All text content is translatable
- Add more languages in `src/config/i18n.ts`

---

## 📱 Building for Production

### Web Deployment
```bash
npm run build:web
# Deploy the web-build folder to your hosting
```

### Android APK
```bash
expo build:android
# Or use EAS Build:
eas build --platform android
```

### iOS IPA
```bash
expo build:ios
# Or use EAS Build:
eas build --platform ios
```

### Publishing to Stores
1. Set up proper app icons and splash screens
2. Configure `app.json` with store listings
3. Build production versions
4. Submit to Google Play / App Store

---

## 🔐 Security Best Practices

✅ **Environment Variables**: Never commit `.env` to git
✅ **Firebase Rules**: Properly configured security rules
✅ **Authentication**: User data protected by Firebase Auth
✅ **API Keys**: Stored securely in environment variables
✅ **Input Validation**: All forms validate user input

---

## 🚧 Roadmap / Future Features

- [ ] Real-time chat between users and merchants
- [ ] Push notifications for orders and jobs
- [ ] Advanced search with filters
- [ ] Admin dashboard for moderation
- [ ] Payment integration (Stripe/local gateways)
- [ ] Reviews and ratings system
- [ ] Social sharing features
- [ ] Advanced analytics
- [ ] Google Maps full integration
- [ ] Multi-city support across GCC

---

## 🤝 Contributing

This is a starter template designed to be extended. Developers can:
1. Fork the project
2. Add new features in modular folders
3. Follow the existing code structure
4. Maintain TypeScript types
5. Keep i18n translations updated

---

## 📄 License

This project is open-source and available for community use.

---

## 📞 Support

For Firebase setup help or deployment questions, refer to:
- [Expo Documentation](https://docs.expo.dev/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [React Navigation Docs](https://reactnavigation.org/)

---

## 🌟 Credits

**Built for the Sudanese Community in Kuwait and GCC**

Made with ❤️ using React Native + Expo + Firebase

---

**Happy Coding! 🚀**
