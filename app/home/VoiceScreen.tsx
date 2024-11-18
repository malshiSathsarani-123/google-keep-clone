import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const VoiceScreen = () => {
  return (
    <View style={styles.container}>
      {/* Top Text */}
      <Text style={styles.text}>Speak now</Text>

      {/* Animated Dots */}
      <View style={styles.dotsContainer}>
        <View style={[styles.dot, { backgroundColor: '#4285F4' }]} />
        <View style={[styles.dot, { backgroundColor: '#EA4335' }]} />
        <View style={[styles.dot, { backgroundColor: '#FBBC05' }]} />
        <View style={[styles.dot, { backgroundColor: '#34A853' }]} />
      </View>

      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton}>
        <MaterialIcons name="close" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
  text: {
    fontSize: 24,
    color: '#FFFFFF',
    marginTop: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginHorizontal: 5,
  },
  closeButton: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    backgroundColor: '#333333',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default VoiceScreen;
