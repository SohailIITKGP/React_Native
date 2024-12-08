// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return <Stack />;
// }

import React from 'react'
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native';

const Rootlayout = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
    <Stack initialRouteName='(tabs)'
    // screenoptions={{headershown: false}}
    // screenOptions={{
    //   headerStyle: {
    //     backgroundColor: '#f4511e',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    // }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="about" options={{ title: "about" }} />
    </Stack>
    </SafeAreaView>
  );
}

export default Rootlayout;