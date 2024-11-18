import React from "react";
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { router } from "expo-router";
import VoiceScreen from "./home/VoiceScreen";

type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  const handleIconAction = (action: string) => {
    router.push('/home/DrawingScreen')
  };


  return (
    <View style={styles.container}>
      {/* Top Search Bar */}
      <View style={styles.searchBar}>
        <TouchableOpacity onPress={openDrawer}>
          <MaterialIcons name="menu" size={24} color="#b3b3b3" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search your notes"
          placeholderTextColor="#b3b3b3"
        />
        <TouchableOpacity onPress={() => console.log("Profile clicked")}>
          <MaterialIcons name="account-circle" size={32} color="#b3b3b3" />
        </TouchableOpacity>
      </View>


      {/* Notes Grid */}
      <ScrollView contentContainerStyle={styles.notesContainer}>
        <View style={styles.note}>
          <Text style={styles.noteText}>Empty note</Text>
        </View>
        <View style={styles.note}>
          <Text style={styles.noteText}>Empty note</Text>
        </View>
        <View style={styles.note}>
          <Text style={styles.noteText}>So hijjj</Text>
        </View>
        <View style={styles.note}>
          <Text style={styles.noteText}>Empty note</Text>
        </View>
        <View style={styles.note}>
          <Text style={styles.noteText}>Jjjj</Text>
        </View>
        <View style={styles.note}>
          <Text style={styles.noteText}>Empty note</Text>
        </View>
      </ScrollView>

      {/* Bottom Actions */}
      <View style={styles.bottomActions}>
      <TouchableOpacity onPress={() => router.push("/ListScreen")}>
      <MaterialIcons name="check-box" size={24} color="#b3b3b3" />
    </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconAction("Brush")}>
          <MaterialIcons name="brush" size={24} color="#b3b3b3" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/VoiceScreen')}>
          <MaterialIcons name="mic" size={24} color="#b3b3b3" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconAction("Gallery")}>
          <MaterialIcons name="image" size={24} color="#b3b3b3" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push('/home/CreateNoteScreen')}
      >
        <MaterialIcons name="add" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202124",
    padding: 16,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#303134",
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: "#fff",
    fontSize: 16,
  },
  notesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 80,
  },
  note: {
    backgroundColor: "#303134",
    width: "47%",
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
  },
  noteText: {
    color: "#b3b3b3",
    fontSize: 16,
  },
  bottomActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#303134",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  fab: {
    position: "absolute",
    bottom: 80,
    right: 16,
    backgroundColor: "#4285F4",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
});
