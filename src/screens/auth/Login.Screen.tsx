import React from "react";
import { StyleSheet } from "react-native";
import { VStack, Box, Button, ButtonText, Center, HStack, Text } from "@gluestack-ui/themed";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigators/AuthStack";

interface Props {
  navigation: NativeStackScreenProps<AuthStackParams, "LoginScreen">;
}

const LoginScreen: React.FC<Props> = ({ navigation }: Props) => {
  const handleLogin = () => {
    // handle login logic here
  };

  return (
    <VStack height="100%" py="$12" px="$8" gap="$10" backgroundColor="$white">
      <Center borderWidth={1} flex={1}>
        <Text>
          This is the Login Screen. You can add your login form here. For now, we will just have a
          button to simulate login.
        </Text>
      </Center>

      <HStack justifyContent="center">
        <Button onPress={handleLogin} width="100%" backgroundColor="$backgroundDark800">
          <ButtonText>Login with Google</ButtonText>
        </Button>
      </HStack>
    </VStack>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
