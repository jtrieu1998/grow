import { StyleSheet, View, SafeAreaView } from 'react-native';
import AddBedButton from "@/components/AddBedButton";


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}> 
      <AddBedButton />
      <View style={styles.bedContainer}>
        <View style={{backgroundColor:'red'}}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bedContainer: {
    flexDirection: "row",
    flex: 10,
    backgroundColor: "red",
  },
  screen: {
    // flexDirection: "column",
    backgroundColor: "grey",
    padding: 1,
    flex: 1,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
