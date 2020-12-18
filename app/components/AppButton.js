import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import colors from '../config/colors';

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15,
  },
});

const AppButton = ({title, onPress, color = 'primary'}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors[color]}]}
      onPress={onPress}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;
