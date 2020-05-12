import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PAGES from "../pages";

const Routes = () => {
  //destructuring
  const {
    HOME,
    ABOUT,
    FAVORITES,
    SETTINGS,
    BEACH,
    SIGNUP,
    SIGNIN,
    TERMS
  } = PAGES;
  const Stack = createStackNavigator();
  const options = {
    headerStyle: {}
  };
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name={HOME.TITLE}
          component={HOME.COMPONENT}
          options={options}
        />
        <Stack.Screen name={SIGNIN.TITLE} component={SIGNIN.COMPONENT} />
        <Stack.Screen name={SIGNUP.TITLE} component={SIGNUP.COMPONENT} />

        <Stack.Screen name={ABOUT.TITLE} component={ABOUT.COMPONENT} />
        <Stack.Screen name={FAVORITES.TITLE} component={FAVORITES.COMPONENT} />
        <Stack.Screen name={SETTINGS.TITLE} component={SETTINGS.COMPONENT} />
        <Stack.Screen name={TERMS.TITLE} component={TERMS.COMPONENT} />

        <Stack.Screen name={BEACH.TITLE} component={BEACH.COMPONENT} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
