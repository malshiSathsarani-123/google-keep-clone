import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; 

const ListScreen = () => {
  const [listItems, setListItems] = React.useState<{ text: string; completed: boolean }[]>([]);
  const [newItem, setNewItem] = React.useState<string>("");
  const router = useRouter();

  const addItem = () => {
    if (newItem.trim() && !listItems.some((item) => item.text === newItem.trim())) {
      setListItems((prevItems) => [...prevItems, { text: newItem.trim(), completed: false }]);
      setNewItem("");
    }
  };

  const toggleItem = (index: number) => {
    setListItems((prevItems) =>
      prevItems.map((item, i) => (i === index ? { ...item, completed: !item.completed } : item))
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} accessible accessibilityLabel="Go back">
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
        accessible
        accessibilityLabel="Enter list title"
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
          accessible
          accessibilityLabel="Enter a list item"
        />
      </View>

      {/* List Items */}
      <FlatList
        data={listItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <TouchableOpacity onPress={() => toggleItem(index)}>
              <MaterialIcons
                name={item.completed ? "check-box" : "check-box-outline-blank"}
                size={24}
                color="white"
                accessible
                accessibilityLabel={`Mark item as ${item.completed ? "incomplete" : "complete"}`}
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.listItemText,
                item.completed && { textDecorationLine: "line-through", color: "#AAAAAA" },
              ]}
            >
              {item.text}
            </Text>
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
