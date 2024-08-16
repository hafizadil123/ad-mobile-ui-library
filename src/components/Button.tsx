import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const Button = ({
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
