import React from 'react';
import {View, StyleSheet, Image, ImageBackground, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import AppButton from '../components/AppButton';
import colors from '../config/colors';
import routes from '../navigation/routes';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    top: 70,
    position: 'absolute',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
  },
  tagline: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 10,
  },
});

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/images/wp.jpg')}
      blurRadius={5}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Sell What You Don't Need!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
          color="primary"
          style={styles.loginButton}
        />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate(routes.REGISTER)}
          color="secondary"
          style={styles.registerButton}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
