import {
  GluestackUIProvider,
  Box,
  Text,
  Button,
  ButtonText,
  Heading,
  VStack,
  Center,
  Alert,
  AlertIcon,
  AlertText,
  InfoIcon,
  Progress,
  ProgressFilledTrack,
  Spinner,
  HStack,
  useToast,
  ToastDescription,
  ToastTitle,
  Toast,
  Badge,
  BadgeIcon,
  BadgeText,
  GlobeIcon,
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  ChevronDownIcon,
  FormControl,
  Icon,
  Input,
  InputField,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  ScrollView,
  Pressable,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Switch,
  AlertDialogBackdrop,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  ButtonGroup,
  CloseIcon,
  Fab,
  AddIcon,
  FabIcon,
  FabLabel,
  StatusBar,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { SafeAreaView } from "react-native";
import React, { useState } from "react";
import AuthStack from "./src/navigators/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
const Example = () => {
  return (
    <ScrollView
      h="100%"
      // justifyContent="center"
      px={4}
      bg="$backgroundLight0"
      // borderWidth={2}
      borderColor="$backgroundLight400"
      // alignItems="center"
      sx={{
        _web: {
          minHeight: "100vh",
        },
      }}
    >
      <Button backgroundColor="$blueGray900" mb="$1">
        <ButtonText>Hello I am good button</ButtonText>
      </Button>
      <VStack alignItems="center" space="lg">
        <Heading size="xl">Welcome to gluestack-ui</Heading>
        <Text>
          Edit{" "}
          <Text px="$2" py="$1" rounded="$sm" bg="$backgroundLight100">
            src/App.tsx
          </Text>{" "}
          and save to reload.
        </Text>
      </VStack>
      <VStack space="lg" p="$3">
        <Box bg="$violet600" p="$5">
          <Text color="white">This is the Box</Text>
        </Box>
        <Center bg="$violet600" p="$5">
          <Text color="white">This is the centered Box</Text>
        </Center>
        <Alert action="error" variant="outline">
          <AlertIcon as={InfoIcon} mr="$3" />
          <AlertText>
            We have updated our terms of service. Please review and accept to continue using our
            service.
          </AlertText>
        </Alert>
        <VStack space="md" backgroundColor="$backgroundDark50" p="$2">
          <Heading>Internal Storage</Heading>
          <Progress value={46} w="100%" h={8} bg="$backgroundDark300">
            <ProgressFilledTrack h={8} bg="$backgroundDark900" />
          </Progress>
          <Text size="md">14GB</Text>
        </VStack>
        <HStack space="xl" borderWidth="$1" padding="$5" alignItems="center" borderRadius="$lg">
          <Spinner size="small" color="$blueGray900" />
          <Text size="md">Please Wait</Text>
        </HStack>
        <ToastExample />
        <HStack space="md">
          <Badge size="lg" variant="outline" borderRadius="$sm" action="info" padding="$1">
            <BadgeText size="xs">pdf</BadgeText>
            <BadgeIcon as={GlobeIcon} ml="$2" />
          </Badge>
          <Badge size="lg" variant="outline" borderRadius="$sm" action="warning" px="$3" py="$1">
            <BadgeText size="xs">pdf</BadgeText>
            <BadgeIcon as={GlobeIcon} ml="$2" />
          </Badge>
          <Badge size="lg" variant="outline" borderRadius="$sm" action="success" padding="$1">
            <BadgeText size="xs">pdf</BadgeText>
            <BadgeIcon as={GlobeIcon} ml="$2" />
          </Badge>
        </HStack>
        <VStack>
          {/* <Checkbox size="md" isInvalid={true} isDisabled={false} value="hello">
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Label</CheckboxLabel>
          </Checkbox> */}

          <VStack space="md" width="100%">
            <FormControl w="100%">
              <Input>
                <InputField placeholder="Username" />
              </Input>
            </FormControl>
            <FormControl>
              <Select>
                <SelectTrigger>
                  <SelectInput placeholder="Country" />
                  <SelectIcon mr="$3">
                    <Icon as={ChevronDownIcon} />
                  </SelectIcon>
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="India" value="India" />
                    <SelectItem label="Sri Lanka" value="Sri Lanka" />
                    <SelectItem label="Uganda" value="Uganda" />
                    <SelectItem label="Japan" value="Japan" />
                  </SelectContent>
                </SelectPortal>
              </Select>
            </FormControl>
            <FormControl>
              <Button bg="$backgroundDark800">
                <ButtonText fontSize="$sm" fontWeight="$medium">
                  Next
                </ButtonText>
              </Button>
            </FormControl>
          </VStack>
        </VStack>
        <Pressable
          onPress={() => console.log("Hello")}
          p="$3"
          bg="$primary500"
          rounded="$md"
          justifyContent="center"
          alignItems="center"
          sx={{ ":hover": { bg: "$primary400" }, ":active": { bg: "$amber800" } }}
        >
          <Text color="white">Press me</Text>
        </Pressable>
        <Center p="$6" borderWidth="$1" borderColor="$backgroundDark500" borderRadius="$md">
          <Slider
            defaultValue={30}
            size="md"
            orientation="horizontal"
            isDisabled={false}
            isReversed={false}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Center>
        <Switch size="lg" isDisabled={false} />
        <AlertExample />
        <Fab
          size="md"
          placement="bottom right"
          isHovered={false}
          isDisabled={false}
          isPressed={false}
        >
          <FabIcon as={AddIcon} mr="$1" />
          <FabLabel>Quick start</FabLabel>
        </Fab>
      </VStack>
    </ScrollView>
  );
};

export default function App() {
  return (
    <GluestackUIProvider config={config} colorMode="dark">
      <NavigationContainer>
        {/* <SafeAreaView
          style={{
            flex: 1,
          }}
        > */}
        <AuthStack />
        {/* </SafeAreaView> */}
      </NavigationContainer>
      {/* <Example /> */}

      {/* 
        <Image
          size="md"
          borderRadius="$none"
          source={{
            uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          }}
        /> */}
    </GluestackUIProvider>
  );
}

function ToastExample() {
  const toast = useToast();
  return (
    <Button
      onPress={() => {
        toast.show({
          placement: "top right",
          render: ({ id }) => {
            return (
              <Toast nativeID={id} action="attention" variant="solid" mt="$10">
                <VStack space="xs">
                  <ToastTitle>New Message</ToastTitle>
                  <ToastDescription>
                    Hey, just wanted to touch base and see how you're doing. Let's catch up soon!
                  </ToastDescription>
                </VStack>
              </Toast>
            );
          },
        });
      }}
    >
      <ButtonText>Press Me</ButtonText>
    </Button>
  );
}

function AlertExample() {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  return (
    <Center p="$6" borderWidth="$1" borderColor="$backgroundDark500" borderRadius="$md">
      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Click me to show Alert</ButtonText>
      </Button>
      <AlertDialog
        isOpen={showAlertDialog}
        onClose={() => {
          setShowAlertDialog(false);
        }}
      >
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading size="lg">Deactivate account</Heading>
            <AlertDialogCloseButton>
              <Icon as={CloseIcon} />
            </AlertDialogCloseButton>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text size="sm">
              Are you sure you want to deactivate your account? Your data will be permanently
              removed and cannot be undone.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <ButtonGroup space="lg">
              <Button
                variant="outline"
                action="secondary"
                onPress={() => {
                  setShowAlertDialog(false);
                }}
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button
                bg="$error600"
                action="negative"
                onPress={() => {
                  setShowAlertDialog(false);
                }}
              >
                <ButtonText>Deactivate</ButtonText>
              </Button>
            </ButtonGroup>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Center>
  );
}
