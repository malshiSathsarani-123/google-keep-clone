import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal, FlatList,
} from "react-native";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import ChoosePopup from "../../components/ChoosePopup"; 
import PaintPopup from "../../components/PaintPopup";
import { router } from "expo-router";
import { saveNote } from "@/service/api";

const CreateNoteScreen: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false); 
  const [isPaintPopupVisible, setPaintPopupVisible] = useState<boolean>(false);

  const notes = [
    { id: "1", text: "Empty note" },
    { id: "2", text: "Empty note" },
    { id: "3", text: "Empty note" },
    { id: "4", text: "So hiii" },
    { id: "5", text: "Jjjj" },
    { id: "6", text: "Empty note" },
  ];
  const handleSaveNote = async () => {

    console.log(title)
    if (!title || !note) {
      alert("Title and note content cannot be empty.");
      return;
    }
    try {
      await saveNote(title, note);
      alert("Note saved successfully!");
      setTitle("");
      setNote("");
    } catch (error) {
      alert("Failed to save the note. Please try again.");
    }
  };

  const handleOpenPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleOpenPaintPopup = () => {
    setPaintPopupVisible(true);
  };

  const handleClosePaintPopup = () => {
    setPaintPopupVisible(false);
  };
  const renderNote = ({ item }: { item: { id: string; text: string } }) => (
      <View style={styles.reminderCard}>
        <Text style={styles.reminderTitle}>{item.text}</Text>
        <View style={styles.reminderTimeContainer}>
          <MaterialIcons name="alarm" size={18} color="#9e9e9e" />
          <Text style={styles.reminderTime}>Tomorrow, 8:00 AM</Text>
        </View>
      </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <FlatList
          data={notes}
          renderItem={renderNote}
          keyExtractor={(item) => item.id}
          numColumns={2} // Two-column layout
          contentContainerStyle={styles.notesContainer}
      />
      {/*</View>*/}

      {/* Content Section */}
      <View style={styles.content}>
        <TextInput
          style={styles.titleInput}
          placeholder="Title"
          placeholderTextColor="#888"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.noteInput}
          placeholder="Note"
          placeholderTextColor="#888"
          value={note}
          onChangeText={setNote}
          multiline
        />
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleOpenPopup}>
          <Ionicons name="add-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOpenPaintPopup}>
          <Ionicons name="color-palette-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.timestamp}>Edited 10:13 AM</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Popup Modals */}
      {isPopupVisible && <ChoosePopup isVisible={isPopupVisible} onClose={handleClosePopup} />}
      {isPaintPopupVisible && <PaintPopup isVisible={isPaintPopupVisible} onClose={handleClosePaintPopup} />}
    </SafeAreaView>
  );
};

export default CreateNoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  content: {
    flex: 1,
    marginTop: 20,
  },
  titleInput: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  noteInput: {
    fontSize: 18,
    color: "#fff",
    lineHeight: 24,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#333",
  },
  timestamp: {
    fontSize: 14,
    color: "#888",
  },
  notesContainer: {
    padding: 10,
    justifyContent: "center",
  },
  reminderCard: {
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    padding: 15,
    margin: 5,
    flex: 1, // Ensures proper distribution for columns
    maxWidth: "48%", // Ensures proper spacing between columns
  },
  reminderTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  reminderTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  reminderTime: {
    color: "#9e9e9e",
    fontSize: 14,
    marginLeft: 5,
  },
});
