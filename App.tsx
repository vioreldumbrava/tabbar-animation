/* eslint-disable prettier/prettier */
/* eslint-disable spaced-comment */
import React from "react";
import { StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";
//import { createStackNavigator } from "react-navigation-stack";

import { LoadAssets, StyleGuide } from "./src/components";
import Examples, { examples } from "./src/Examples";
import AngularGradient from "./src/AngularGradient";
import Accordion from "./src/Accordion";
import ShaderAndMask from "./src/ShaderAndMask";
import CircularProgress from "./src/CircularProgress";
import Slider, { assets as sliderAssets } from "./src/Slider";
import Tabbar from "./src/Tabbar";
import Cat from "./src/Tabbar/icons/Cat";

//
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";

////

const assets: number[] = [
  ...examples.map(example => example.source),
  ...sliderAssets
];
const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf")
};

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: StyleGuide.palette.primary,
    borderBottomWidth: 0
  },
  headerTintColor: "white"
};

const TabbarStackNavigator = createStackNavigator();

export const OrdersNavigator = () => {
  return (
    <TabbarStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
      <TabbarStackNavigator.Screen
        name="Orders"
        component={Tabbar}
        options={{
          title: "Tabbar",
          headerBackTitle: null
        }}
      />
    </TabbarStackNavigator.Navigator>
  );
};

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <OrdersNavigator />
    </NavigationContainer>
  )
}

// const AppNavigator = createAppContainer(
//   createStackNavigator(
//     {
//       Tabbar: {
//         screen: Tabbar,
//         navigationOptions: {
//           title: "Tabbar",
//           headerBackTitle: null
//         }
//       }
// Examples: {
//   screen: Examples,
//   navigationOptions: {
//     title: "The 5 min React Native",
//     headerBackTitle: null
//   }
// },
// Slider: {
//   screen: Slider,
//   navigationOptions: {
//     title: "Custom Slider",
//     headerBackTitle: null
//   }
// },
// CircularProgress: {
//   screen: CircularProgress,
//   navigationOptions: {
//     title: "Circular Progress"
//   }
// },
// AngularGradient: {
//   screen: AngularGradient,
//   navigationOptions: {
//     title: "Angular Gradient"
//   }
// },
// Accordion: {
//   screen: Accordion,
//   navigationOptions: {
//     title: "Accordion"
//   }
// },
// ShaderAndMask: {
//   screen: ShaderAndMask,
//   navigationOptions: {
//     title: "Shader And Mask"
//   }
//       // }
//     },
// {
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: StyleGuide.palette.primary,
//         borderBottomWidth: 0
//     },
//     headerTintColor: "white"
//   }
// }
//   )
// );

export default () => (
  <LoadAssets {...{ assets, fonts }}>
    <StatusBar barStyle="light-content" />
    <AppNavigator />
  </LoadAssets>
);
