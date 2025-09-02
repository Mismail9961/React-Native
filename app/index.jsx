import { View, Text, StyleSheet, ImageBackground, Platform, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

import parrotImage from "../assets/images/parrot.jpg";

const Index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={parrotImage}
        resizeMode="cover"
        style={styles.image}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.75)", "rgba(0,0,0,0.3)"]}
          style={styles.overlay}
        >
          <View style={styles.textContainer}>
            <Text style={styles.title}>Ismail</Text>
            <Text style={styles.subtitle}>React Native Developer</Text>
          </View>

          <Link href="/contact" asChild>
            <Pressable style={({ pressed }) => [
              styles.button,
              pressed && { opacity: 0.8, transform: [{ scale: 0.98 }] }
            ]}>
              <Text style={styles.buttonText}>Contact Us</Text>
            </Pressable>
          </Link>
        </LinearGradient>
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
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  textContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: Platform.OS === "web" ? "4vw" : 42, // responsive font
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 2,
    ...(Platform.OS === "web"
      ? { textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }
      : {
          textShadowColor: "rgba(0,0,0,0.8)",
          textShadowOffset: { width: 2, height: 2 },
          textShadowRadius: 6,
        }),
  },
  subtitle: {
    marginTop: 12,
    color: "#e0e0e0",
    fontSize: Platform.OS === "web" ? "1.5vw" : 20,
    fontWeight: "300",
    textAlign: "center",
    letterSpacing: 1,
  },
  button: {
    backgroundColor: "#ff9800",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 1,
    textAlign: "center",
  },
});
