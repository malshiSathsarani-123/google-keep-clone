import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
type PaintPopupProps = {
  isVisible: boolean;
  onClose: () => void;
};

const PaintPopup: React.FC<PaintPopupProps> = ({ isVisible, onClose }) => {

  
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Colour Section */}
          <Text style={styles.sectionTitle}>Colour</Text>
          <View style={styles.optionsRow}>
            {["#6E44FF", "#FF6E6E", "#F7B500", "#A4DE02", "#00C4B4", "#1A73E8", "#34A853"].map(
              (color, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.circle, { backgroundColor: color }]}
                />
              )
            )}
          </View>

          {/* Background Section */}
          <Text style={styles.sectionTitle}>Background</Text>
          <View style={styles.optionsRow}>
            {["transparent", "#D1A6FF", "#98E2FF", "#E5FFCC", "#FFD9E8", "#F7E2C5"].map(
              (background, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.circle,
                    {
                      backgroundColor: background,
                      borderWidth: background === "transparent" ? 1 : 0,
                      borderColor: "white",
                    },
                  ]}
                />
              )
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#202124",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  sectionTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
  },
});

export default PaintPopup;
