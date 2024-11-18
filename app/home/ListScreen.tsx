import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ListScreen = () => {
  const [listItems, setListItems] = React.useState<string[]>([]);
  const [newItem, setNewItem] = React.useState<string>("");

  const addItem = () => {
    if (newItem.trim()) {
      setListItems((prevItems) => [...prevItems, newItem]);
      setNewItem("");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <MaterialIcons name="notifications" size={24} color="white" />
          <MaterialIcons name="lock" size={24} color="white" style={styles.iconSpacing} />
          <MaterialIcons name="archive" size={24} color="white" style={styles.iconSpacing} />
        </View>
      </View>

      {/* Title */}
      <TextInput
        style={styles.titleInput}
        placeholder="Title"
        placeholderTextColor="#AAAAAA"
      />

      {/* List Input */}
      <View style={styles.listInputContainer}>
        <MaterialIcons name="drag-handle" size={24} color="white" />
        <MaterialIcons name="check-box-outline-blank" size={24} color="white" style={styles.iconSpacing} />
        <TextInput
          style={styles.listInput}
          placeholder="List item"
          placeholderTextColor="#AAAAAA"
          value={newItem}
          onChangeText={setNewItem}
          onSubmitEditing={addItem}
        />
      </View>

      {/* List Items */}
      <FlatList
        data={listItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <MaterialIcons name="check-box-outline-blank" size={24} color="white" />
            <Text style={styles.listItemText}>{item}</Text>
          </View>
        )}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <MaterialIcons name="add-box" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="palette" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.footerText}>Edited 9:39 PM</Text>
        <TouchableOpacity>
          <MaterialIcons name="more-vert" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202124",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerIcons: {
    flexDirection: "row",
  },
  iconSpacing: {
    marginLeft: 15,
  },
  titleInput: {
    color: "white",
    fontSize: 20,
    marginBottom: 10,
  },
  listInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  listInput: {
    flex: 1,
    color: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#AAAAAA",
    marginLeft: 10,
    fontSize: 16,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  listItemText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  footerText: {
    color: "#AAAAAA",
    fontSize: 12,
  },
});

export default ListScreen;
