import { StyleSheet } from "react-native";
import normalize from "src/config/normalize";

export const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: normalize(24),
      paddingVertical: normalize(16, "height"),
    },
    textStyle: {
      fontSize: normalize(20),
      fontWeight: "400",
    },
    textinputContainer: {
      marginTop: normalize(20),
      alignItems: "center",
      rowGap: normalize(10),
    },
    bottomContainer: {
      marginTop: normalize(20),
      alignItems: "center",
      rowGap: normalize(20),
    },
    textinputWidth: {
      width: normalize(320),
    },
  });
