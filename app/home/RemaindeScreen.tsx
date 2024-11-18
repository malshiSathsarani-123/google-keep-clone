import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const notes = [
  { id: "1", text: "Empty note" },
  { id: "2", text: "Empty note" },
  { id: "3", text: "Empty note" },
  { id: "4", text: "So hiii" },
  { id: "5", text: "Jjjj" },
  { id: "6", text: "Empty note" },
];

const RemaindeScreen: React.FC = () => {
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
    <FlatList
      data={notes}
      renderItem={renderNote}
      keyExtractor={(item) => item.id}
      numColumns={2} // Two-column layout
      contentContainerStyle={styles.notesContainer}
    />
  );
};

const styles = StyleSheet.create({
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

export default RemaindeScreen;
