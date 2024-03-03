import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

import { styles } from "src/components/CustomButton/styles";

type buttonProps = {
  label?: string;
  onPress?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
};

const CustomButton = (props: buttonProps) => {
  const { label, onPress, isLoading = false, disabled = false } = props;
  const currentStyles = styles();
  return !disabled ? (
    <TouchableOpacity style={currentStyles.buttonstyle} onPress={onPress}>
      {isLoading ? (
        <>
          <ActivityIndicator size="small" color="white" />
        </>
      ) : (
        <Text style={currentStyles.textStyle}>{label}</Text>
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={currentStyles.buttonstyleDisabled}
      onPress={onPress}
      disabled={true}
    >
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
