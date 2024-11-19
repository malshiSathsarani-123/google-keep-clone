import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const ListVoiceScreen = () => {
  const [dotsAnim] = useState(
    Array(4)
      .fill(0)
      .map(() => new Animated.Value(1))
  );

  useEffect(() => {
    const animateDots = () => {
      dotsAnim.forEach((dot, index) => {
        Animated.sequence([
          Animated.timing(dot, {
            toValue: 1.5,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(dot, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]).start(() => index === 3 && animateDots());
      });
    };

    animateDots();
  }, []);

  return (
    <View style={styles.container}>
      {/* Top Text */}
      <Text style={styles.text}>Listening...</Text>

      {/* Animated Dots */}
      <View style={styles.dotsContainer}>
        {dotsAnim.map((anim, index) => (
          <Animated.View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: dotColors[index] },
              { transform: [{ scale: anim }] },
            ]}
          />
        ))}
      </View>

      {/* Microphone Button */}
      <TouchableOpacity style={styles.recordButton}>
        <MaterialIcons name="mic" size={36} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton} onPress={() => router.push('/HomeScreen')}>
        <MaterialIcons name="close" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const dotColors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202124",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 50,
  },
  text: {
    fontSize: 24,
    color: "#FFFFFF",
    marginTop: 20,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginHorizontal: 5,
  },
  recordButton: {
    backgroundColor: "#4285F4",
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  closeButton: {
    position: "absolute",
    bottom: 30,
    left: 20,
    backgroundColor: "#333333",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ListVoiceScreen;
