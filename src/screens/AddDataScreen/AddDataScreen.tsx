import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { styles } from "src/screens/AddDataScreen/styles";
import { useNavigation } from "@react-navigation/native";
import { appStack } from "src/navigation/types";
import CustomInput from "src/components/CustomInput/CustomInput";

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
      <CustomInput label="Your Label" placeholder="Write Anything" />
    </View>
  );
};

export default AddDataScreen;
