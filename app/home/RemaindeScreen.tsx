import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

const notes = [
  { id: "1", text: "Empty note" },
  { id: "2", text: "Empty note" },
  { id: "3", text: "Empty note" },
  { id: "4", text: "So hiii" },
  { id: "5", text: "Jjjj" },
  { id: "6", text: "Empty note" },
];

const RemaindeScreen: React.FC = () => {
  const navigation = useNavigation();

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
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push('/HomeScreen')}
      >
        <MaterialIcons name="arrow-back" size={24} color="white" />
        <Text style={styles.backText}>Back to Home</Text>
      </TouchableOpacity>

      {/* Notes List */}
      <FlatList
        data={notes}
        renderItem={renderNote}
        keyExtractor={(item) => item.id}
        numColumns={2} // Two-column layout
        contentContainerStyle={styles.notesContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  notesContainer: {
    padding: 10,
    justifyContent: "center",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#1e1e1e",
    borderRadius: 5,
    margin: 10,
  },
  backText: {
    color: "white",
    fontSize: 16,
    marginLeft: 5,
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
