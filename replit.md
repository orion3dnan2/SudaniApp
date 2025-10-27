# Bayt Al Sudani - Sudanese Community Marketplace

## Overview

Bayt Al Sudani (البيت السوداني) is a mobile marketplace and community platform designed to connect Sudanese users in Kuwait and GCC countries. The app enables users to browse stores and restaurants, find jobs, discover services, and interact with merchants through integrated WhatsApp communication.

Built with React Native, Expo SDK 52, TypeScript, and Firebase, the application provides a seamless multi-platform experience with full Arabic (RTL) and English language support, dark mode theming, and a warm, culturally-appropriate color palette (brown, gold, white, green accents).

## Recent Changes (October 27, 2025)

**✅ Complete App Built from Scratch**
- Full React Native + Expo mobile app implementation
- Authentication system with email/password + forgot password flow
- Home screen with Top Stores, Jobs, and Services sections
- Store and Product detail pages with WhatsApp integration
- Jobs listing and posting functionality
- Profile page with language switcher and dark mode
- Global theme system using ThemeContext for consistent theming
- Multi-language support (Arabic RTL + English) with i18next
- Comprehensive README with setup instructions
- All code reviewed and approved by architect

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Runtime**
- **React Native (0.76.0)** with **Expo SDK 52** for cross-platform mobile development
- **TypeScript** for type safety and improved developer experience
- **Expo Router (4.0.0)** for file-based navigation system

**State Management & Context**
- **Context API** for global state management (AuthContext, ThemeContext)
- No external state management library (Redux/MobX) - using React's built-in context
- Authentication state managed through Firebase Auth listeners
- Theme preferences persisted in AsyncStorage

**Navigation Structure**
- **React Navigation** with Stack and Bottom Tab navigators
- Stack Navigator for authentication flow (Login, SignUp, ForgotPassword)
- Bottom Tab Navigator for main app sections (Home, Jobs, Profile, Add Store)
- Nested navigation for detail screens (Store Details, Product Details)

**UI/UX Patterns**
- **Theme System**: Custom theming with light/dark mode support, color definitions in `src/config/theme.ts`
- **Internationalization**: i18next for English/Arabic translations with RTL support
- **Responsive Design**: Manual responsive layouts using flexbox and platform-specific adjustments
- **Component Architecture**: Functional components with React Hooks

**Key Design Decisions**
- No UI component library - custom components for brand consistency
- Warm color palette (brown #8B4513, gold #DAA520) for cultural authenticity
- Emoji placeholders for images during development phase
- AsyncStorage for theme and user preference persistence

### Backend Architecture

**Firebase Integration**
- **Firebase Authentication**: Email/password auth with planned Google Sign-In support
- **Firestore Database**: NoSQL document database for stores, products, jobs, users
- **Firebase Storage**: Image and media storage for product photos, store banners, user avatars
- **Real-time Listeners**: onAuthStateChanged for authentication state synchronization

**Data Models** (defined in `src/types/index.ts`)
- **User**: id, email, name, phone, photoURL, role (user/merchant/admin)
- **Store**: name (bilingual), description, category, location, contact info, rating
- **Product**: name (bilingual), description, price, images, stock status
- **Job**: title, description, company, location, salary range, employment type

**Authentication Flow**
- Email/password registration and login
- Password reset via Firebase email
- User role management (user/merchant/admin)
- Session persistence through Firebase Auth

**Security Considerations**
- Environment variables for Firebase configuration (EXPO_PUBLIC_* prefix)
- Firebase security rules (to be implemented)
- No sensitive data in client-side code

### External Dependencies

**Core Dependencies**
- **Firebase (10.7.1)**: Authentication, Firestore database, Storage
- **Expo SDK (52.0.0)**: Core framework and native module access
- **React Navigation**: Native stack and bottom tabs navigation
- **i18next (23.7.6)** & **react-i18next (13.5.0)**: Internationalization framework

**Native Modules (Expo)**
- **expo-location (18.0.0)**: Geolocation services for nearby restaurants and stores
- **expo-notifications (0.29.0)**: Push notifications for job alerts and order updates
- **expo-linking (7.0.0)**: Deep linking and URL scheme handling
- **@react-native-async-storage/async-storage (1.23.1)**: Local data persistence

**UI & Interaction**
- **react-native-maps (1.18.0)**: Map integration for store locations and directions
- **react-native-gesture-handler (2.20.0)**: Touch gesture support
- **react-native-reanimated (3.16.0)**: Smooth animations and transitions
- **react-native-screens (4.1.0)**: Native screen optimization

**Third-Party Integrations**
- **WhatsApp**: Deep linking via Linking.openURL for merchant communication
- **Google Maps API**: Through react-native-maps for location services (requires API key)
- **Phone Dialer**: Native device integration for direct calling

**Development Tools**
- **TypeScript (5.3.0)**: Static type checking
- **Babel**: JavaScript transpilation with Expo presets
- **Metro Bundler**: JavaScript bundling through Expo

**Planned Integrations**
- Google Sign-In (OAuth flow)
- Payment gateway integration for future e-commerce features
- Admin analytics dashboard

**Configuration Files**
- `app.json`: Expo configuration with bundle identifiers and app metadata
- `babel.config.js`: Babel configuration with reanimated plugin
- `tsconfig.json`: TypeScript compiler options with path aliases
- `.env` (not in repo): Firebase credentials and API keys