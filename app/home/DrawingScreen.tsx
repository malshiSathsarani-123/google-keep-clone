import React, { useState, useRef } from "react";
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions } from "react-native";
import { GestureHandlerRootView, PanGestureHandler, PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import Svg, { Path } from "react-native-svg";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

type PathData = {
  path: string;
  color: string;
};

const DrawingScreen = () => {
  const [paths, setPaths] = useState<PathData[]>([]);
  const [currentPath, setCurrentPath] = useState<string>("");
  const [strokeColor, setStrokeColor] = useState<string>("#FFFFFF");

  const handleGesture = (event: PanGestureHandlerGestureEvent) => {
    const { x, y } = event.nativeEvent;
    setCurrentPath((prevPath) => `${prevPath} ${x},${y}`);
  };

  const handleGestureEnd = () => {
    if (currentPath) {
      setPaths([...paths, { path: currentPath, color: strokeColor }]);
      setCurrentPath("");
    }
  };

  const handleUndo = () => {
    setPaths((prevPaths) => prevPaths.slice(0, -1));
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {/* Top bar */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => {router.push('/HomeScreen')}}>
            <MaterialIcons name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={styles.actionIcons}>
            <TouchableOpacity onPress={handleUndo}>
              <MaterialIcons name="undo" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <MaterialIcons name="redo" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <MaterialIcons name="more-vert" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Drawing area */}
        <PanGestureHandler
          onGestureEvent={handleGesture}
          onEnded={handleGestureEnd}
        >
          <View style={styles.drawingArea}>
            <Svg style={StyleSheet.absoluteFill}>
              {paths.map((pathData, index) => (
                <Path
                  key={index}
                  d={pathData.path}
                  stroke={pathData.color}
                  strokeWidth={2}
                  fill="none"
                />
              ))}
              {currentPath && (
                <Path
                  d={currentPath}
                  stroke={strokeColor}
                  strokeWidth={2}
                  fill="none"
                />
              )}
            </Svg>
          </View>
        </PanGestureHandler>

        {/* Bottom toolbar */}
        <View style={styles.bottomBar}>
          <TouchableOpacity onPress={() => setStrokeColor("#FFFFFF")}>
            <MaterialIcons name="crop-square" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStrokeColor("#FF0000")}>
            <MaterialIcons name="brush" size={24} color="#FF0000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStrokeColor("#00FF00")}>
            <MaterialIcons name="format-paint" size={24} color="#00FF00" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStrokeColor("#0000FF")}>
            <MaterialIcons name="create" size={24} color="#0000FF" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  safeArea: {
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#1E1E1E",
  },
  actionIcons: {
    flexDirection: "row",
    gap: 16,
  },
  drawingArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: "#1E1E1E",
  },
});

export default DrawingScreen;
