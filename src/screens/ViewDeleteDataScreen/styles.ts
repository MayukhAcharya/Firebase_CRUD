import { StyleSheet } from "react-native";
import normalize from "src/config/normalize";

export const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    flatlistContainer: {
      backgroundColor: "white",
      height: normalize(150, "height"),
      marginHorizontal: normalize(20),
      marginVertical: normalize(10),
      paddingHorizontal: normalize(15),
      paddingVertical: normalize(15),
      borderRadius: normalize(10),
      elevation: 10,
      flexDirection: "row",
    },
    cardInnerStyle: {
      flexDirection: "row",
    },
    titleTextStyle: {
      fontSize: normalize(15),
      fontFamily: "sans-serif-medium",
    },
    dataTextStyle: {
      fontSize: normalize(15),
      fontFamily: "Roboto",
    },
    leftContainer: {
      flexDirection: "column",
      justifyContent: "space-between",
    },
    rightContainer: {
      justifyContent: "center",
      alignItems: "flex-end",
      flex: 1,
    },
    emptyFieldStyle: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: normalize(50),
    },
  });
