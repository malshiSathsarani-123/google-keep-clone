import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AddPopup from "../../components/OptionsPopup"; // Import the AddPopup component

const CreateNoteScreen: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false); // Manage popup visibility

  const handleOpenPopup = () => {
    setPopupVisible(true); 
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.actions}>
          <TouchableOpacity>
            <Ionicons name="pin-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="download-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

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

      <View style={styles.footer}>
        <TouchableOpacity onPress={handleOpenPopup}>
          <Ionicons name="add-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="color-palette-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.timestamp}>Edited 10:13 AM</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {isPopupVisible && <AddPopup onClose={handleClosePopup} />} {/* Show the popup when visible */}
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
