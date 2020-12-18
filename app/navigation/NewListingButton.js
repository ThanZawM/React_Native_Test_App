import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';

function NewListingButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={30}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: 20,
    backgroundColor: colors.primary,
    height: 70,
    width: 70,
    borderRadius: 35,
    borderColor: colors.white,
    borderWidth: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NewListingButton;
