import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface OptionsPopupProps {
  onClose: () => void;
}

const OptionsPopup: React.FC<OptionsPopupProps> = ({ onClose }) => {
  return (
    <View style={styles.popupContainer}>
      <View style={styles.popup}>
        <Text style={styles.popupTitle}>Options</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  popupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#4caf50',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
  },
});

export default OptionsPopup;
