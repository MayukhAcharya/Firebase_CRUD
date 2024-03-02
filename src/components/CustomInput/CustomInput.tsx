import {
  View,
  Text,
  ViewStyle,
  StyleProp,
  TextInputProps,
  TextInput,
} from "react-native";
import React, { forwardRef } from "react";
import { styles } from "src/components/CustomInput/styles";
import normalize from "src/config/normalize";

type inputProps = {
  label?: string;
  placeholder?: string;
  allStyle?: StyleProp<ViewStyle>;
};

const CustomInput = forwardRef(
  (
    { label, placeholder, allStyle, ...props }: inputProps & TextInputProps,
    ref: any
  ) => {
    const currentStyles = styles();
    return (
      <View style={[currentStyles.mainContainer, allStyle]}>
        <Text style={currentStyles.labelTextStyle}>{label}</Text>
        <View style={{ marginTop: normalize(5) }}>
          <TextInput
            ref={ref}
            placeholder={placeholder}
            style={currentStyles.textInputStyle}
            {...props}
          />
        </View>
      </View>
    );
  }
);
export default CustomInput;
