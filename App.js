import * as React from "react";
import * as Speech from "expo-speech";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
//import db from './localdb';

export default class App extends React.Component {


  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor={"lightskyblue"}
            centerComponent={{
              text: "Text to Speech Converter",
              style: { color: "#fff", fontSize: 20 },
            }}
          />

          <Image
            style={styles.imageIcon}
            source={{
              uri: "https://responsivevoice.org/wp-content/uploads/2020/01/speech-icon-2797263_1280-930x930.png",
            }}
          />

          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({
                text: text,
              });
            }}
          />
          <TouchableOpacity
            style={styles.goButton}
            onPress={() => {
              Speech.speak(this.state.text)

            }}
          >
            <Text style={styles.buttonText}>GO</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputBox: {
    marginTop: 50,
    width: "80%",
    alignSelf: "center",
    height: 40,
    textAlign: "center",
    borderWidth: 4,
    outline: "none",
  },
  goButton: {
    width: "50%",
    height: 55,
    alignSelf: "center",
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  displayText: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: "50%",
    transform: "translateX(-50%)",
    marginTop: 30,
  },
  chunkButton: {
    width: "60%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    margin: 5,
    backgroundColor: "red",
  },
});
