import React, { useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';

const DrawingScreen = () => {
  const canvasRef = useRef<SketchCanvas>(null);

  const saveDrawing = () => {
    // canvasRef.current?.save('png', true, 'drawing', 'png', true, true);
  };

  const clearDrawing = () => {
    canvasRef.current?.clear();
  };

  const handleSketchSaved = (success: boolean, path: string) => {
    if (success) {
      console.log('Drawing saved to:', path);
    } else {
      console.log('Failed to save drawing');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Google Keep Drawing Screen</Text>

      <SketchCanvas
        ref={canvasRef}
        style={styles.canvas}
        strokeColor={'black'}
        strokeWidth={5}
        onSketchSaved={handleSketchSaved}  
      />

      <View style={styles.buttonContainer}>
        <Button title="Save Drawing" onPress={saveDrawing} />
        <Button title="Clear Drawing" onPress={clearDrawing} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  canvas: {
    flex: 1,
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default DrawingScreen;
