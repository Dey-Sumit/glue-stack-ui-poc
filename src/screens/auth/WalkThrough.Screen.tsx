import { Box, Button, ButtonText, Center, HStack, LinearGradient } from "@gluestack-ui/themed";
import { Text, VStack } from "@gluestack-ui/themed";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigators/AuthStack";
import Svg, { Defs, Pattern, Path, Rect, Ellipse } from "react-native-svg";
import { Dimensions, Image, ImageBackground, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeIn, FadeInDown, FadingTransition } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<AuthStackParams, "WalkthroughScreen1" | "WalkthroughScreen2">;

const BACKGROUND_IMAGE_URI_1 =
  "https://images.unsplash.com/photo-1637775297509-19767f6fc225?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBhdHRlcm4lMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D&w=800";

const BACKGROUND_IMAGE_URI_2 =
  "https://images.unsplash.com/photo-1637946175559-22c4fe13fc54?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBhdHRlcm4lMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D&w=800";
// const BACKGROUND_IMAGE_URI =
//   "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2565";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const WalkthroughScreen = ({ route, navigation }: Props) => {
  const currentScreenNumber = route.params.screenNumber;
  const handleNext = (action: "SKIP" | "NEXT") => {
    if (action === "SKIP") {
      navigation.navigate("LoginScreen");
      return;
    }

    if (currentScreenNumber === 1) {
      navigation.navigate("WalkthroughScreen2", { screenNumber: 2 });
    } else if (currentScreenNumber === 2) {
      navigation.navigate("LoginScreen");
    }
  };

  const { top: SAFE_AREA_TOP } = useSafeAreaInsets();

  // return (
  //   <View
  //     style={{
  //       flex: 1,
  //     }}
  //   >
  //     <StatusBar style="dark" backgroundColor="red" />
  //     <ImageBackground
  //       source={{
  //         uri: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2565",
  //       }}
  //       style={{
  //         width: "100%",
  //         height: "100%",
  //         position: "absolute",
  //         top: 0,
  //         left: 0,
  //         bottom: 0,
  //         right: 0,
  //         backgroundColor: "black",
  //       }}
  //       resizeMode="cover"
  //     />
  //   </View>
  // );

  return (
    <Box backgroundColor="$black" flex={1}>
      <StatusBar translucent style="light" />

      <Animated.Image
        entering={FadeInDown.duration(1500)}
        source={{
          uri: currentScreenNumber === 1 ? BACKGROUND_IMAGE_URI_1 : BACKGROUND_IMAGE_URI_2,
        }}
        layout={FadingTransition}
        style={{
          ...StyleSheet.absoluteFillObject,
          resizeMode: "cover",
        }}
      />

      <VStack flex={1} space="3xl" px="$6" pb="$6" pt={SAFE_AREA_TOP}>
        <Center flex={1}>
          <Text color="$white">
            Walkthrough Screen {route.params.screenNumber === 1 ? "1" : "2"}
          </Text>
        </Center>

        <HStack justifyContent="space-between">
          <Button onPress={() => handleNext("SKIP")} variant="link">
            <ButtonText>Skip</ButtonText>
          </Button>
          <Button onPress={() => handleNext("NEXT")} variant="outline" rounded="$full">
            <ButtonText>{route.params.screenNumber === 1 ? "Next" : "Login"}</ButtonText>
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default WalkthroughScreen;
