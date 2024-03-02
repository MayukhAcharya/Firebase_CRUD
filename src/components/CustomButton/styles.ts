import { StyleSheet } from "react-native";
import normalize from "src/config/normalize";

export const styles = () =>
  StyleSheet.create({
    buttonstyle: {
      width: normalize(150),
      backgroundColor: "#4c9",
      height: normalize(40, "height"),
      borderRadius: normalize(10),
      justifyContent: "center",
      alignItems: "center",
      elevation: 10,
    },
    textStyle: {
      color: "#fff",
      fontSize: normalize(14),
    },
  });
