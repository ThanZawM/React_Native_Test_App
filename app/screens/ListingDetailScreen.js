import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

import ListItem from '../components/lists/ListItem';
import colors from '../config/colors';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    color: colors.black,
    fontSize: 24,
    fontFamily: 'Roboto',
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: colors.primary,
  },
  userContainer: {
    marginVertical: 40,
  },
});

const ListingDetailScreen = ({route}) => {
  const listings = route.params;
  return (
    <View>
      <Image style={styles.image} source={listings.image} />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{listings.title}</Text>
        <Text style={styles.subTitle}>${listings.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            title="Master Bone"
            subTitle="5 Listings"
            image={require('../assets/images/p1.jpg')}
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailScreen;
