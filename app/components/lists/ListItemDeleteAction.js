import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../config/colors';

const ListItemDeleteAction = ({onPress}) => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name="delete"
            size={35}
            color={colors.white}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 100,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListItemDeleteAction;
