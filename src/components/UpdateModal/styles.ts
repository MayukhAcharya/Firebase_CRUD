import { StyleSheet } from "react-native";
import normalize, { width } from "src/config/normalize";

export const styles = () =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: "rgba(18, 25, 39, 0.95) ",
      padding: width / 7,
      alignItems: "center",
    },
    container: {
      height: normalize(400),
      backgroundColor: "#fff",
      paddingHorizontal: normalize(20),
      paddingVertical: normalize(15),
      marginTop: normalize(80),
      width: normalize(320),
      borderRadius: normalize(20),
      borderWidth: 2,
      borderColor: "#4c9",
    },
    innerContainer: {
      rowGap: normalize(15),
      alignItems: "center",
      marginTop: normalize(10),
    },
    cancelButtonStyle: {
      width: normalize(100),
      height: normalize(30),
    },
    bottomContainer: {
      alignItems: "flex-end",
      justifyContent: "flex-end",
      marginTop: normalize(20),
      flexDirection: "row",
      columnGap: normalize(10),
    },
    textinputWidth: {
      width: normalize(260),
    },
  });
