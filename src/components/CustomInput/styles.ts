import { StyleSheet } from "react-native";
import normalize from "src/config/normalize";

export const styles = () =>
  StyleSheet.create({
    mainContainer: {
      width: normalize(330, "width"),
    },
    labelTextStyle: {
      fontSize: normalize(13),
      fontFamily: "Roboto",
      color: "#000",
      marginLeft: normalize(5),
    },
    textInputStyle: {
      borderWidth: 1,
      paddingHorizontal: normalize(10),
      borderRadius: normalize(10),
      backgroundColor: "#fff",
      height: normalize(40, "height"),
      fontSize: normalize(14),
      fontWeight: "500",
    },
  });
