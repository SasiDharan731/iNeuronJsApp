import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  Stack,
  Center,
  Heading,
  ScrollView,
  VStack,
  Divider,
  NativeBaseProvider,
  Button,
  HStack,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.center}>
        <HStack space={10}>
          <Button onPress={() => alert("This is a test alert!")}>Hello 1</Button>

          <Button>Hello 2</Button>

          <Button>Hello 3</Button>
        </HStack>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    margin: 40,
  },
});
