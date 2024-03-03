import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { memo, useState } from "react";

import { styles } from "src/components/UpdateModal/styles";
import CustomInput from "src/components/CustomInput/CustomInput";
import normalize from "src/config/normalize";
import CustomButton from "../CustomButton/CustomButton";
import { doc, updateDoc } from "firebase/firestore";
import { fire_db } from "src/config/firebaseConfig";

type updateModalProps = {
  onClose: () => void;
  stuName?: string;
  department?: string;
  collegeRoll?: string;
  universityRoll?: string;
  id: string;
};

const UpdateModal = (props: updateModalProps) => {
  const currentStyles = styles();
  const {
    onClose,
    stuName = "",
    department = "",
    collegeRoll = "",
    universityRoll = "",
    id,
  } = props;

  const [name, setName] = useState<string>(stuName);
  const [dept, setDept] = useState<string>(department);
  const [roll, setRoll] = useState<string>(collegeRoll);
  const [uniRoll, setUniRoll] = useState<string>(universityRoll);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const submitData = async () => {
    setIsLoading(true);
    try {
      const docRef = doc(fire_db, `collegeData/${id}`);
      await updateDoc(docRef, {
        name: name,
        department: dept,
        collegeRoll: roll,
        universityRoll: parseInt(uniRoll),
        checked: true,
      });
      Alert.alert("", "Your Data has been updated successfully!", [
        {
          text: "Cancel",
          onPress: () => {},
        },
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
      setIsLoading(false);
      onClose();
    } catch (error) {
      alert("Error uploading Data!");
      setIsLoading(false);
    }
  };
  return (
    <View style={currentStyles.mainContainer}>
      <View style={currentStyles.container}>
        <View style={currentStyles.innerContainer}>
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
            label="Cancel"
            style={currentStyles.cancelButtonStyle}
            onPress={() => onClose()}
          />
          <CustomButton
            label="Submit"
            style={currentStyles.cancelButtonStyle}
            onPress={() => submitData()}
            isLoading={isLoading}
          />
        </View>
      </View>
    </View>
  );
};

export default UpdateModal;
