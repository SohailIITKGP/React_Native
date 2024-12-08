// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return <Stack />;
// }

import React from 'react'
import { Stack } from 'expo-router';

const Rootlayout = () => {
  return (
    <Stack
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
      {/* <Stack.Screen name="index"/>
      <Stack.Screen name="about" options={{ title: "about" }} /> */}
    </Stack>
  );
}

export default Rootlayout;