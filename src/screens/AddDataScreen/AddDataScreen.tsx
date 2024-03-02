import { View, Text, Button } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { styles } from "src/screens/AddDataScreen/styles";
import { useNavigation } from "@react-navigation/native";
import { appStack } from "src/navigation/types";

type navigating = NativeStackNavigationProp<appStack, "AddDataScreen">;

const AddDataScreen = () => {
  const currentStyles = styles();
  const navigation = useNavigation<navigating>();
  return (
    <View style={currentStyles.container}>
      <Text>new Data to be Added</Text>
      <Button
        title="Check Data"
        onPress={() => {
          navigation.navigate("ViewDeleteDataScreen");
        }}
      />
    </View>
  );
};

export default AddDataScreen;
