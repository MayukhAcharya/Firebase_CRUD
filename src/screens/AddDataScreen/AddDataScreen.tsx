import { View, Text, Button, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { styles } from "src/screens/AddDataScreen/styles";
import { useNavigation } from "@react-navigation/native";
import { appStack } from "src/navigation/types";
import CustomInput from "src/components/CustomInput/CustomInput";
import CustomButton from "src/components/CustomButton/CustomButton";
import normalize from "src/config/normalize";

type navigating = NativeStackNavigationProp<appStack, "AddDataScreen">;

const AddDataScreen = () => {
  const currentStyles = styles();
  const navigation = useNavigation<navigating>();

  const [name, setName] = useState<string>("");
  const [dept, setDept] = useState<string>("");
  const [roll, setRoll] = useState<string>("");
  const [uniRoll, setUniRoll] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <KeyboardAvoidingView style={currentStyles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={currentStyles.textStyle}>
          Add Some Data in the below Fields
        </Text>
      </View>
      <View style={currentStyles.textinputContainer}>
        <CustomInput
          label="Name"
          allStyle={{ width: normalize(320) }}
          onChangeText={(text) => {
            setName(text);
          }}
          value={name}
          placeholder="Your Name"
        />
        <CustomInput
          label="Department"
          allStyle={{ width: normalize(320) }}
          onChangeText={(text) => {
            setDept(text);
          }}
          value={dept}
          placeholder="Your Department"
        />
        <CustomInput
          label="College Roll Number"
          allStyle={{ width: normalize(320) }}
          onChangeText={(text) => {
            setRoll(text);
          }}
          value={roll}
          placeholder="Your College Roll Number"
        />
        <CustomInput
          label="University Roll Number"
          allStyle={{ width: normalize(320) }}
          onChangeText={(text) => {
            setUniRoll(text);
          }}
          value={uniRoll}
          placeholder="Your Department"
          keyboardType="numeric"
        />
      </View>
      <View style={{ marginTop: normalize(20), alignItems: "center" }}>
        <CustomButton
          label="Submit Data"
          isLoading={isLoading}
          onPress={() => navigation.navigate("ViewDeleteDataScreen")}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddDataScreen;
