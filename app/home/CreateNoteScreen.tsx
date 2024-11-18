// CreateNoteScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';

const CreateNoteScreen = ({ navigation }: any) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [noteColor, setNoteColor] = useState('#fff'); // Default color is white
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSaveNote = () => {
    // Save the note logic (you could save it in a global state or database)
    console.log('Note Saved:', noteTitle, noteContent, noteColor);
    navigation.goBack(); // Go back after saving
  };

  const handleColorSelect = (color: string) => {
    setNoteColor(color);
    setIsModalVisible(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: noteColor }]}>
      <TextInput
        style={styles.titleInput}
        placeholder="Title"
        value={noteTitle}
        onChangeText={setNoteTitle}
      />
      <TextInput
        style={styles.contentInput}
        placeholder="Take a note..."
        value={noteContent}
        onChangeText={setNoteContent}
        multiline
      />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setIsModalVisible(true)} style={styles.colorButton}>
          <Text style={styles.buttonText}>Pick Color</Text>
        </TouchableOpacity>

        <Button title="Save Note" onPress={handleSaveNote} />
      </View>

      {/* Color Picker Modal */}
      <Modal visible={isModalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.colorPicker}>
            <Text style={styles.modalText}>Choose a Color</Text>
            <View style={styles.colorOptions}>
              {['#ffeb3b', '#4caf50', '#2196f3', '#ff5722', '#9c27b0', '#e91e63'].map((color) => (
                <TouchableOpacity
                  key={color}
                  style={[styles.colorOption, { backgroundColor: color }]}
                  onPress={() => handleColorSelect(color)}
                />
              ))}
            </View>
            <TouchableOpacity onPress={() => setIsModalVisible(false)} style={styles.closeModalButton}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleInput: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  contentInput: {
    fontSize: 16,
    height: 200,
    textAlignVertical: 'top',
    // borderColor: '#ccc',
    // borderWidth: 1,
    // borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  colorPicker: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  colorOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  colorOption: {
    width: 50,
    height: 50,
    marginBottom: 10,
    borderRadius: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  closeModalButton: {
    backgroundColor: '#ff5722',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default CreateNoteScreen;
