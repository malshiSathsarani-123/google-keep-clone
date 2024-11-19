import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ChoosePopup from "../../components/ChoosePopup"; 
import PaintPopup from "../../components/PaintPopup";
import { router } from "expo-router";
import { saveNote } from "@/service/api";

const CreateNoteScreen: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false); 
  const [isPaintPopupVisible, setPaintPopupVisible] = useState<boolean>(false);

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

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/HomeScreen")}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.actions}>
          <TouchableOpacity>
            <Ionicons name="pin-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSaveNote}>
            <Ionicons name="download-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

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
});
