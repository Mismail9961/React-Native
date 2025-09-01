import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import parrotImage from '../../assets/images/parrot.jpg';

const Index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={parrotImage}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>Ismail</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center', // ✅ centers content horizontally
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)', // ✅ move bg here so it wraps text nicely
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
