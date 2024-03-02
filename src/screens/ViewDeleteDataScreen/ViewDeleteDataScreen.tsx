import { View, Text } from "react-native";
import React from "react";

import { styles } from "src/screens/ViewDeleteDataScreen/styles";

const ViewDeleteDataScreen = () => {
  const currentStyles = styles();
  return (
    <View style={currentStyles.container}>
      <Text>ViewDeleteDataScreen</Text>
    </View>
  );
};

export default ViewDeleteDataScreen;
