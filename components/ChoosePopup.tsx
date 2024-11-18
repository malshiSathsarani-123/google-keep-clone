import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ChoosePopupProps {
    isVisible: boolean;
  onClose: () => void;
}

const ChoosePopup: React.FC<ChoosePopupProps> = ({ isVisible, onClose }) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => console.log("Take photo")}
          >
            <Ionicons name="camera-outline" size={24} color="#fff" />
            <Text style={styles.optionText}>Take photo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.option}
            onPress={() => console.log("Choose image")}
          >
            <Ionicons name="image-outline" size={24} color="#fff" />
            <Text style={styles.optionText}>Choose image</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.option}
            onPress={() => console.log("Drawing")}
          >
            <Ionicons name="brush-outline" size={24} color="#fff" />
            <Text style={styles.optionText}>Drawing</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.option}
            onPress={() => console.log("Recording")}
          >
            <Ionicons name="mic-outline" size={24} color="#fff" />
            <Text style={styles.optionText}>Recording</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.option}
            onPress={() => console.log("Tick boxes")}
          >
            <Ionicons name="checkbox-outline" size={24} color="#fff" />
            <Text style={styles.optionText}>Tick boxes</Text>
          </TouchableOpacity>
        </View>

        {/* Close Button */}
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#222",
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  optionText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 15,
  },
  closeButton: {
    alignItems: "center",
    padding: 15,
    backgroundColor: "#333",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ChoosePopup;