# Expo React Native Boilerplate 🚀 

[![Expo](https://img.shields.io/badge/Expo-53.0.19-blue.svg?logo=expo)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-v0.79.5-green.svg)](https://facebook.github.io/react-native/)
![badge-Android](https://img.shields.io/badge/Platform-Android-brightgreen)
![badge-iOS](https://img.shields.io/badge/Platform-iOS-lightgray)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.6.0-764ABC?logo=redux)](https://redux-toolkit.js.org/)
[![GitHub license](https://img.shields.io/badge/license-Apache%20License%202.0-blue.svg?style=flat)](https://www.apache.org/licenses/LICENSE-2.0)
<a href="https://github.com/piashcse"><img alt="License" src="https://img.shields.io/static/v1?label=GitHub&message=piashcse&color=C51162"/></a> 

A well-structured **Expo Boilerplate** built on **RTK Query** and **Redux architecture** to streamline React Native development. This boilerplate provides a scalable, maintainable, and production-ready setup for your mobile applications.  

## ✨ Features  

- **RTK Query & Redux Toolkit** – Efficient state management and API handling  
- **Zustand Support** – Lightweight alternative for global state management  
- **Expo Router** – File-based routing for a better navigation experience
- **Localization (i18n)** – Multi-language support
- **Centralized Loading & Error Handling** – Consistent error and loading state management across the app  
- **Reusable Components** – Well-structured UI components  
- **Custom Hooks** – Optimized hooks for state and effect management 
- **Scalable Architecture** – Organized and maintainable folder structure
- **TypeScript Ready** – Strongly-typed project for reliability 


## Project Directory

```
src
├── app                    # Entry point or global app setup
├── assets                 # Fonts, images, videos, etc.
│   ├── fonts
│   └── images
├── components             # Reusable UI components
├── config                 # App-wide configurations
│   ├── appConfig.ts
│   ├── dynamicDimension.ts
│   └── theme.ts
├── constants              # App constants and color definitions
│   ├── APP_CONSTANTS.ts
│   └── appColors.ts
├── hooks                  # Custom React hooks
│   ├── useColorScheme.ts
│   ├── useColorScheme.web.ts
│   ├── useLocalization.ts
│   └── useThemeColor.ts
├── localization           # i18n and translation logic
├── selector               # Redux selectors or custom selectors
│   └── selector.ts
├── service                # API services
│   ├── axiosInstance.ts
│   └── query
│       ├── baseQuery.ts
│       └── rtkQuery.ts
├── store                  # Redux or RTK store setup and middlewares
│   ├── apiErrorMiddleware.ts
│   └── store.ts
├── types                  # TypeScript types/interfaces
│   ├── ApiRequest.ts
│   └── ApiResponse.ts
├── utils                  # Utility/helper functions
│   └── common.ts
├── zustand                # Zustand stores (state management)
│   ├── apiErrorStore.ts
│   ├── appStore.ts
│   └── snackBarStore.ts
```

## Built With 🛠

- [Expo](https://github.com/expo/expo) - An open-source framework for making universal native apps with React. Expo runs on Android, iOS, and the web.
- [React-Native](https://reactnative.dev/) - React Native brings React's declarative UI framework to iOS and Android. With React Native, you use native UI controls and have full access to the native platform.
- [Expo-Router](https://docs.expo.dev/router/introduction/) - Expo Router is a file-based router for React Native and web applications. It allows you to manage navigation between screens in your app, allowing users to move seamlessly between different parts of your app's UI, using the same components on multiple platforms (Android, iOS, and web).
- [Expo-Font](https://docs.expo.dev/versions/latest/sdk/font/) - Expo Font allows loading fonts from the web and using them in React Native components
- [Redux](https://redux.js.org/) - Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.
- [RTK-Query](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux developmen
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js.
- [Redux-toolkit](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux development.
- [Netinfo](https://github.com/react-native-netinfo/react-native-netinfo) - React Native Network Info API for Android, iOS, macOS, Windows & Web.
- [zustand](https://github.com/pmndrs/zustand) - A small, fast and scalable bearbones state-management solution using simplified flux principles. Has a comfy API based on hooks.
- [react-native-async-storage](https://github.com/react-native-async-storage/async-storage#readme) - An asynchronous, persistent, key-value storage system for React Native.
- [react-native-paper](https://github.com/callstack/react-native-paper) - Material Design for React Native (Android & iOS).
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)- Customizable Icons for React Native with support for image source and full styling.
- [patch-package](https://github.com/ds300/patch-package) - Fix broken node modules instantly
- [ESLint](https://eslint.org/) - ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is JavaScript with syntax for types.
## Requirements

- [Node.js](https://nodejs.org/) (latest)
- [Yarn](https://yarnpkg.com/) (latest)

## How to run

- `git clone git@github.com:piashcse/react-native-boilerplate.git`
- `yarn install`

Now, you can choose a command to run the project:

- `yarn ios` to run on iOS simulator
- `yarn android` to run on Android simulator

## 👨 Developed By

<a href="https://twitter.com/piashcse" target="_blank">
  <img src="https://avatars.githubusercontent.com/piashcse" width="80" align="left">
</a>

**Mehedi Hassan Piash**

[![Twitter](https://img.shields.io/badge/-Twitter-1DA1F2?logo=x&logoColor=white&style=for-the-badge)](https://twitter.com/piashcse)
[![Medium](https://img.shields.io/badge/-Medium-00AB6C?logo=medium&logoColor=white&style=for-the-badge)](https://medium.com/@piashcse)
[![Linkedin](https://img.shields.io/badge/-LinkedIn-0077B5?logo=linkedin&logoColor=white&style=for-the-badge)](https://www.linkedin.com/in/piashcse/)
[![Web](https://img.shields.io/badge/-Web-0073E6?logo=appveyor&logoColor=white&style=for-the-badge)](https://piashcse.github.io/)
[![Blog](https://img.shields.io/badge/-Blog-0077B5?logo=readme&logoColor=white&style=for-the-badge)](https://piashcse.blogspot.com)

# License

```
Copyright 2023 piashcse (Mehedi Hassan Piash)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
