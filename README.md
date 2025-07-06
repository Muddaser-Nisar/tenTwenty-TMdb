# 🎬 TenTwenty TMDb React Native App

A beautiful React Native application built using **TypeScript** and powered by **The Movie Database (TMDb)** API. The app allows users to browse upcoming movies, view details, search titles, and watch trailers in a full-screen player.

---

## 🌟 Features

- 🔍 Search for movies with real-time debounced input
- 🎞️ View upcoming movies using TMDb API
- 🧾 Detailed movie screen with genres and overview
- ▶️ Full-screen trailer playback
- 📁 Multi-environment configuration (Dev, QA, Production)
- ⚡ Optimized with `React.memo`, `useCallback`, and lazy loading
- 🎨 Custom UI components, scalable layout, and clean architecture

---

## 🔧 Tech Stack

- **React Native** (TypeScript)
- **Redux Toolkit** for state management
- **Axios** for API integration
- **FastImage** for optimized image rendering
- **React Navigation** for screen transitions
- **Video Player** for trailer playback
- **.env.multi** for multi-environment configuration

---

## 🧑‍💻 Getting Started

# Install Yarn (if not already installed)

npm install -g yarn

# Clone the repository

git clone https://github.com/Muddaser-Nisar/tenTwenty-TMdb.git
cd tenTwenty-TMdb

# Install dependencies

yarn install

# (Optional) Install CocoaPods for iOS (Mac only)

cd ios && pod install && cd ..

# Create env files according to the configuration

# Start Metro server

yarn start

# Run the app on Android

please follow script mentioned in the pkg.json

# OR run on iOS (Mac only)

yarn ios

`

## 🧑‍💻 Project Structure

src/
├── assets/ # App icons, fonts, images
├── components/ # Reusable UI components (e.g., MovieCard, GenreCard)
├── redux/ # State management (slices, api handlers)
├── screens/ # All screens (Watch, Search, Details, etc.)
├── theme/ # Colors, typography, spacing, etc.
├── utils/ # Helper functions, scaling, etc.
├── types/ # TypeScript interfaces and enums
├── navigation/ # Navigation configs and route names

```

```
