import React from "react";
import { StyleSheet } from "react-native";
import { VStack, Box, Button, ButtonText, Center, HStack, Text } from "@gluestack-ui/themed";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigators/AuthStack";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  navigation: NativeStackScreenProps<AuthStackParams, "LoginScreen">;
}

const LoginScreen: React.FC<Props> = ({ navigation }: Props) => {
  const { top: SAFE_AREA_TOP } = useSafeAreaInsets();
  const handleLogin = () => {
    // handle login logic here
  };

  return (
    <VStack
      flex={1}
      pb="$10"
      px="$4"
      gap="$10"
      backgroundColor="$backgroundDark950"
      pt={SAFE_AREA_TOP}
    >
      <Center borderWidth={1} flex={1} p="$6">
        <Text>
          This is the Login Screen. You can add your login form here. For now, we will just have a
          button to simulate login.
        </Text>
      </Center>

      <HStack justifyContent="center">
        <Button onPress={handleLogin} width="100%">
          <ButtonText>Login with Google</ButtonText>
        </Button>
      </HStack>
    </VStack>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
