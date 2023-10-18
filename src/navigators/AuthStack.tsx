import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WalkthroughScreen from "../screens/auth/WalkThrough.Screen";
import LoginScreen from "../screens/auth/Login.Screen";

/* -------------- the types for the auth stack params ------------- */
export type AuthStackParams = {
  WalkthroughScreen1: {
    screenNumber: 1;
  };
  WalkthroughScreen2: {
    screenNumber: 2;
  };
  LoginScreen: undefined;
};
const Stack = createNativeStackNavigator<AuthStackParams>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="WalkthroughScreen1"
        component={WalkthroughScreen}
        initialParams={{ screenNumber: 1 }}
      />

      <Stack.Screen
        name="WalkthroughScreen2"
        component={WalkthroughScreen}
        initialParams={{ screenNumber: 2 }}
      />

      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
// export default function App() {
//   return <WalkthroughScreen />;
// }
