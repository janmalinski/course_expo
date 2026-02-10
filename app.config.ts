import type { ExpoConfig } from "expo/config";

const environment = process.env.NODE_ENV;
const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";
const IS_PRODUCTION = process.env.APP_VARIANT === "production";

interface EnvironmentalValues {
  name: string;
  bundleIdentifier: string;
  package: string;
}

const getEnviromentalValues = () => {
  // if(IS_DEV){
  //   return {
  //     name: "Firebase App Dev",
  //     bundleIdentifier: "com.janmalinski.firebaseapp.dev",
  //     package: "com.janmalinski.firebaseapp.dev",
  //   }
  // }
  //  if(IS_PREVIEW){
  //   return {
  //     name: "Firebase App Preview",
  //     bundleIdentifier: "com.janmalinski.firebaseapp.preview",
  //     package: "com.janmalinski.firebaseapp.preview",
  //   }
  // }
    return {
        name: "Firebase App",
        bundleIdentifier: "com.janmalinski.firebaseapp",
        package: "com.janmalinski.firebaseapp",
    }
};

// const config: ExpoConfig = {
//   name: getEnviromentalValues().name,
//   slug: "firebaseapp",
//   version: "1.0.0",
//   runtimeVersion: "1.0.0",
//   orientation: "portrait",
//   icon: "./assets/images/icon.png",
//   scheme: "firebaseapp",
//   userInterfaceStyle: "automatic",
//   newArchEnabled: true,

//   ios: {
//     supportsTablet: true,
//     bundleIdentifier: getEnviromentalValues().bundleIdentifier,
//     infoPlist: {
//       ITSAppUsesNonExemptEncryption: false,
//       buildNumber: "1"
//     },
//     // TO SAMO CO infoPlist: {ITSAppUsesNonExemptEncryption: false,
//     // config: {
//     //   usesNonExemptEncryption: false
//     // }
//   },
//   android: {
//     adaptiveIcon: {
//       backgroundColor: "#E6F4FE",
//       foregroundImage: "./assets/images/android-icon-foreground.png",
//       backgroundImage: "./assets/images/android-icon-background.png",
//       monochromeImage: "./assets/images/android-icon-monochrome.png",
//     },
//     edgeToEdgeEnabled: true,
//     predictiveBackGestureEnabled: false,
//     package: getEnviromentalValues().package,
//     versionCode: 1,
//     // permissions: [
//     //   "android.permission.BLUETOOTH",
//     //   "android.permission.BLUETOOTH_ADMIN",
//     //   "android.permission.BLUETOOTH_CONNECT",
//     // ],
//   },
//   web: {
//     output: "static",
//     favicon: "./assets/images/favicon.png",
//   },

//   plugins: [
//     "expo-router",
//     [
//       "expo-splash-screen",
//       {
//         image: "./assets/images/splash-icon.png",
//         imageWidth: 200,
//         resizeMode: "contain",
//         backgroundColor: "#ffffff",
//         dark: {
//           backgroundColor: "#000000",
//         },
//       },
//     ],
//     // [
//     //   "react-native-ble-manager",
//     //   {
//     //     isBleRequired: true,
//     //     neverForLocation: true,
//     //     companionDeviceEnabled: false,
//     //     bluetoothAlwaysPermission:
//     //       "Allow Firebaseapp to connect to bluetooth devices",
//     //   },
//     // ],
//   ],

//   experiments: {
//     typedRoutes: true,
//     reactCompiler: true,
//   },

//   extra: {
//     router: {},
//     eas: {
//       "projectId": "0b277b1f-4a79-44e8-a4f8-bccf0b15d583"
//     },
//   },
//   // runtimeVersion: {
//   //   policy: "appVersion",
//   // },

//   updates: {
//     url: "https://u.expo.dev/0b277b1f-4a79-44e8-a4f8-bccf0b15d583",
//   },

//   owner: "jan-malinski-uslugi-programistyczne-spolka-z-oo",
// };

export default {
  name: getEnviromentalValues().name,
  slug: "firebaseapp",
  version: "1.0.0",
  runtimeVersion: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "firebaseapp",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
   ios: {
    supportsTablet: true,
    bundleIdentifier: getEnviromentalValues().bundleIdentifier,
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
      buildNumber: "1"
    },
    // TO SAMO CO infoPlist: {ITSAppUsesNonExemptEncryption: false,
    // config: {
    //   usesNonExemptEncryption: false
    // }
  },
  android: {
    adaptiveIcon: {
      backgroundColor: "#E6F4FE",
      foregroundImage: "./assets/images/android-icon-foreground.png",
      backgroundImage: "./assets/images/android-icon-background.png",
      monochromeImage: "./assets/images/android-icon-monochrome.png",
    },
    edgeToEdgeEnabled: true,
    predictiveBackGestureEnabled: false,
    package: getEnviromentalValues().package,
    versionCode: 1,
    // permissions: [
    //   "android.permission.BLUETOOTH",
    //   "android.permission.BLUETOOTH_ADMIN",
    //   "android.permission.BLUETOOTH_CONNECT",
    // ],
  },
    web: {
    output: "static",
    favicon: "./assets/images/favicon.png",
  },

  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
        dark: {
          backgroundColor: "#000000",
        },
      },
    ],
    // [
    //   "react-native-ble-manager",
    //   {
    //     isBleRequired: true,
    //     neverForLocation: true,
    //     companionDeviceEnabled: false,
    //     bluetoothAlwaysPermission:
    //       "Allow Firebaseapp to connect to bluetooth devices",
    //   },
    // ],
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
  extra: {
    eas: {
      "projectId": "0b277b1f-4a79-44e8-a4f8-bccf0b15d583"
    },
    firebaseApiKey: process.env.FIREBASE_API_KEY,
    firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
    firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    firebaseAppId: process.env.FIREBASE_APP_ID,
    firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID,
    firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
  },
   updates: {
    url: "https://u.expo.dev/0b277b1f-4a79-44e8-a4f8-bccf0b15d583",
  },

  owner: "jan-malinski-uslugi-programistyczne-spolka-z-oo",
};
