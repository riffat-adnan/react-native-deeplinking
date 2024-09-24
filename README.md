# React Native Deep Linking

This project demonstrates how to implement local deep linking in a React Native application using React Navigation. It includes navigation setup, handling deep links, and showcasing different screens.

## Features

- **Local Deep Linking**: Navigate to specific screens using custom URL schemes.
- **React Navigation**: Easy navigation management between screens.
- **Example Screens**: Includes a home screen and a detail screen that can be accessed through deep links.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- React Native development environment (React Native CLI or Expo)

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/riffat-adnan/react-native-deep-linking.git
   cd react-native-deep-linking-example
   ```

2. **Install the required dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:

   For Android:

   ```bash
   npx react-native run-android
   ```

   For iOS:

   ```bash
   npx react-native run-ios
   ```

## Setting Up Deep Linking

### Android Configuration

To enable deep linking for Android, modify the `AndroidManifest.xml` file located at `android/app/src/main/AndroidManifest.xml` by adding the following intent filter to the main activity:

```xml
<activity
    android:name=".MainActivity"
    android:label="@string/app_name"
    android:configChanges="keyboard|keyboardHidden|orientation|screenSize|smallestScreenSize|locale|layoutDirection|fontScale|screenLayout|directionalLayout|uiMode"
    android:windowSoftInputMode="adjustResize">

    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data
            android:scheme="myapp"
            android:host="details" />
    </intent-filter>
</activity>
```

### Testing Deep Linking

You can test local deep linking by running the following command in your terminal:

```bash
adb shell am start -W -a android.intent.action.VIEW -d "myapp://details/42" com.yourappname
```

Replace `com.yourappname` with your actual package name.

## Code Overview

- **App.js**: Main entry point, sets up navigation and deep linking configuration.
- **src/screens/HomeScreen.js**: Home screen with a button to navigate to the details screen.
- **src/screens/DetailScreen.js**: Detail screen that displays the item ID passed through the deep link.

## Acknowledgements

- [React Navigation](https://reactnavigation.org/)
- [React Native](https://reactnative.dev/)

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.