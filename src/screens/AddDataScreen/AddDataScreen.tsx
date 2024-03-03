import { View, Text, Button, KeyboardAvoidingView, Alert } from "react-native";
import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { addDoc, collection } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

import { styles } from "src/screens/AddDataScreen/styles";
import { appStack } from "src/navigation/types";
import CustomInput from "src/components/CustomInput/CustomInput";
import CustomButton from "src/components/CustomButton/CustomButton";
import normalize from "src/config/normalize";
import { fire_db } from "src/config/firebaseConfig";

type navigating = NativeStackNavigationProp<appStack, "AddDataScreen">;

const AddDataScreen = () => {
  const currentStyles = styles();
  const navigation = useNavigation<navigating>();

  const [name, setName] = useState<string>("");
  const [dept, setDept] = useState<string>("");
  const [roll, setRoll] = useState<string>("");
  const [uniRoll, setUniRoll] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addDataMethod = async () => {
    setIsLoading(true);
    try {
      await addDoc(collection(fire_db, "collegeData"), {
        name: name,
        department: dept,
        collegeRoll: roll,
        universityRoll: parseInt(uniRoll),
        checked: false,
      });
      Alert.alert("", "Your Data has been uploaded successfully!", [
        {
          text: "Cancel",
          onPress: () => {},
        },
        {
          text: "OK",
          onPress: () => {
            setName("");
            setDept("");
            setRoll("");
            setUniRoll("");
          },
        },
      ]);
      setIsLoading(false);
    } catch (error) {
      alert("Error uploading Data!");
    }
  };

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
          allStyle={currentStyles.textinputWidth}
          onChangeText={(text) => {
            setName(text);
          }}
          value={name}
          placeholder="Your Name"
        />
        <CustomInput
          label="Department"
          allStyle={currentStyles.textinputWidth}
          onChangeText={(text) => {
            setDept(text);
          }}
          value={dept}
          placeholder="Your Department"
        />
        <CustomInput
          label="College Roll Number"
          allStyle={currentStyles.textinputWidth}
          onChangeText={(text) => {
            setRoll(text);
          }}
          value={roll}
          placeholder="Your College Roll Number"
        />
        <CustomInput
          label="University Roll Number"
          allStyle={currentStyles.textinputWidth}
          onChangeText={(text) => {
            setUniRoll(text);
          }}
          value={uniRoll}
          placeholder="Your University Roll Number"
          keyboardType="numeric"
        />
      </View>
      <View style={currentStyles.bottomContainer}>
        <CustomButton
          label="Submit Data"
          isLoading={isLoading}
          onPress={() => addDataMethod()}
          disabled={
            name === "" || dept === "" || roll === "" || uniRoll === ""
              ? true
              : false
          }
        />
        <CustomButton
          label="Check All Data"
          onPress={() => navigation.navigate("ViewDeleteDataScreen")}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddDataScreen;
