import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

import { styles } from "src/components/CustomButton/styles";

type buttonProps = {
  label?: string;
  onPress?: () => void;
  isLoading?: boolean;
};

const CustomButton = (props: buttonProps) => {
  const { label, onPress, isLoading = false } = props;
  const currentStyles = styles();
  return (
    <TouchableOpacity style={currentStyles.buttonstyle} onPress={onPress}>
      {isLoading ? (
        <>
          <ActivityIndicator size="small" color="white" />
        </>
      ) : (
        <Text style={currentStyles.textStyle}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
