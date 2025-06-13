// import Ionicons from "@expo/vector-icons/Ionicons";
import { View, StyleSheet, TouchableHighlight, Alert } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";


export default function App() {
  return (
    <View style={styles.plusButtonContainer}>
      <TouchableHighlight
        onPress={createTwoButtonAlert}
        style={styles.container}
      >
        <AntDesign name="pluscircleo" size={40} color="black" />
      </TouchableHighlight>
    </View>
  );
}

const createTwoButtonAlert = () =>
  Alert.alert("Add bed button", "It's cumming", [
    // {
    //   text: "Cancel",
    //   onPress: () => console.log("Cancel Pressed"),
    //   style: "cancel",
    // },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "green",
    alignSelf: 'flex-end',
    padding:10,
  },
  plusButtonContainer: {
    display: 'flex',
    justifyContent:'center',
    flex: 1,
    backgroundColor: "blue",
  },
});