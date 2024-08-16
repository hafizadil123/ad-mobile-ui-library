import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonComponent = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  fontSize?: number;
  fontWeight?: string;
  textColor?: string;
  borderRadius?: number;
  height?: number;
  width?: string;
}) => {
  return (
    <TouchableOpacity>
      <TouchableOpacity style={styles.buttonInner} onPress={onPress}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  buttonStyleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonInner: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
