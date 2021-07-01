import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
  },
  imageContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  imageWrapper: {
    width: 120,
    height: 120,
    overflow: 'hidden',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    marginLeft: 10,
    height: '90%',
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  age: {
    fontStyle: 'italic',
  },
  city: {
    fontWeight: '500',
  },
  email: {
    marginVertical: 2,
    fontWeight: '500',
  },
  phone: {
    fontWeight: '500',
  },
  separator: {
    marginVertical: 7,
  },
});

interface ProfileContainerProps {
  name: string;
  age: string;
  location: string;
  email: string;
  phone: string;
  image: string;
}

export const ProfileContainer = ({
  name,
  age,
  location,
  email,
  phone,
  image,
}: ProfileContainerProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.imageWrapper}>
          <Image
            source={{
              uri:
                image ||
                'https://149361159.v2.pressablecdn.com/wp-content/uploads/2021/01/placeholder.png',
            }}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.age}>{age}</Text>
        </View>
        <View style={styles.separator} />
        <View>
          <Text style={styles.city}>{location}</Text>
          <Text style={styles.email}>{email}</Text>
          <Text style={styles.phone}>{phone}</Text>
        </View>
      </View>
    </View>
  );
};
