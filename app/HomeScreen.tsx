//
// import React, {useEffect, useState} from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
// } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";
// import { useNavigation, DrawerActions } from "@react-navigation/native";
// import { router } from "expo-router";
// import { fetchNotes } from "@/service/api";
//
// // const notes = [
// //   { id: "1", text: "Empty note" },
// //   { id: "2", text: "Empty note" },
// //   { id: "3", text: "So hijjj" },
// //   { id: "4", text: "Empty note" },
// //   { id: "5", text: "Jjjj" },
// //   { id: "6", text: "Empty note" },
// // ];
//
// const HomeScreen: React.FC = () => {
//   const [notes, setNotes] = useState<any[]>([]);
//   const navigation = useNavigation();
//
//   useEffect(() => {
//     const getNotes = async () => {
//       try {
//         const data: { id: string; title: string; note: string }[] = await fetchNotes(); // Update with the correct note structure
//         setNotes(data);
//       } catch (error) {
//         alert("Failed to fetch notes. Please try again.");
//       }
//     };
//     getNotes();
//   }, []);
//
//   const renderNote = ({ item }: { item: any }) => (
//       <View style={styles.noteContainer}>
//         <Text style={styles.noteTitle}>{item.title}</Text>
//         <Text style={styles.noteContent}>{item.note}</Text>
//       </View>
//   );
//
//   const openDrawer = () => {
//     navigation.dispatch(DrawerActions.openDrawer());
//   };
//
//   // const renderNote = ({ item }: { item: { id: string; text: string } }) => (
//   //     <View style={styles.noteCard}>
//   //       <Text style={styles.noteText}>{item.text}</Text>
//   //     </View>
//   // );
//
//   return (
//       <View style={styles.container}>
//         {/* Top Search Bar */}
//         <View style={styles.searchBar}>
//           <TouchableOpacity onPress={openDrawer}>
//             <MaterialIcons name="menu" size={24} color="#b3b3b3" />
//           </TouchableOpacity>
//           <TextInput
//               style={styles.searchInput}
//               placeholder="Search your notes"
//               placeholderTextColor="#b3b3b3"
//           />
//           <TouchableOpacity onPress={() => console.log("Profile clicked")}>
//             <MaterialIcons name="account-circle" size={32} color="#b3b3b3" />
//           </TouchableOpacity>
//         </View>
//
//         {/* Notes List */}
//         {/*<FlatList*/}
//         {/*    data={notes}*/}
//         {/*    renderItem={renderNote}*/}
//         {/*    keyExtractor={(item) => item.id}*/}
//         {/*    numColumns={2}*/}
//         {/*    contentContainerStyle={styles.notesContainer}*/}
//         {/*/>*/}
//         <FlatList
//             data={notes}
//             renderItem={renderNote}
//             keyExtractor={(item) => item._id ? item._id.toString() : String(item.title || item)} // fallback
//             style={styles.notesList}
//         />
//
//         {/* Bottom Actions */}
//         <View style={styles.bottomActions}>
//           <TouchableOpacity onPress={() => router.push("/ListScreen")}>
//             <MaterialIcons name="check-box" size={24} color="#b3b3b3" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => router.push("/home/DrawingScreen")}>
//             <MaterialIcons name="brush" size={24} color="#b3b3b3" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => router.push("/VoiceScreen")}>
//             <MaterialIcons name="mic" size={24} color="#b3b3b3" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => console.log("Gallery clicked")}>
//             <MaterialIcons name="image" size={24} color="#b3b3b3" />
//           </TouchableOpacity>
//         </View>
//
//         {/* Floating Action Button */}
//         <TouchableOpacity
//             style={styles.fab}
//             onPress={() => router.push("/home/CreateNoteScreen")}
//         >
//           <MaterialIcons name="add" size={28} color="white" />
//         </TouchableOpacity>
//       </View>
//   );
// };
//
// export default HomeScreen;
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#202124",
//     padding: 16,
//   },
//   searchBar: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 16,
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     backgroundColor: "#303134",
//     borderRadius: 8,
//   },
//   searchInput: {
//     flex: 1,
//     marginLeft: 8,
//     color: "#fff",
//     fontSize: 16,
//   },
//   notesContainer: {
//     paddingHorizontal: 8,
//     paddingBottom: 80,
//   },
//   noteCard: {
//     backgroundColor: "#303134",
//     flex: 1,
//     margin: 5,
//     padding: 15,
//     borderRadius: 8,
//     maxWidth: "48%", // Two-column layout
//   },
//   noteText: {
//     color: "#b3b3b3",
//     fontSize: 16,
//   },
//   bottomActions: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingVertical: 12,
//     backgroundColor: "#303134",
//     borderTopLeftRadius: 8,
//     borderTopRightRadius: 8,
//     position: "absolute",
//     bottom: 0,
//     width: "100%",
//   },
//   fab: {
//     position: "absolute",
//     bottom: 80,
//     right: 16,
//     backgroundColor: "#4285F4",
//     width: 56,
//     height: 56,
//     borderRadius: 28,
//     justifyContent: "center",
//     alignItems: "center",
//     elevation: 4,
//   },
//   notesList: {
//     flex: 1,
//     marginTop: 20,
//   },
//   noteContainer: {
//     backgroundColor: "#333",
//     marginBottom: 16,
//     padding: 16,
//     borderRadius: 8,
//   },
//   noteTitle: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   noteContent: {
//     fontSize: 16,
//     color: "#ccc",
//     marginTop: 8,
//   },
//
// });
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { router } from "expo-router";
import { fetchNotes } from "@/service/api";

const HomeScreen: React.FC = () => {
  const [notes, setNotes] = useState<any[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const getNotes = async () => {
      try {
        const data: { id: string; title: string; note: string }[] = await fetchNotes(); // Fetch the notes
        setNotes(data);
      } catch (error) {
        alert("Failed to fetch notes. Please try again.");
      }
    };
    getNotes();
  }, []);

  // This function will render each note
  const renderNote = ({ item }: { item: any }) => (
      <TouchableOpacity
          onPress={() => router.push(`/home/CreateNoteScreen?id=${item.title}&note=${item.note}`)
          }
          style={styles.noteContainer}
      >
        <Text style={styles.noteTitle}>{item.title}</Text>
      </TouchableOpacity>
  );

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
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

        {/* Notes List */}
        <FlatList
            data={notes}
            renderItem={renderNote}
            keyExtractor={(item) => item.id ? item.id.toString() : `${Math.random()}`} // Fallback if id is undefined
            style={styles.notesList}
        />


        {/* Bottom Actions */}
        <View style={styles.bottomActions}>
          <TouchableOpacity onPress={() => router.push("/ListScreen")}>
            <MaterialIcons name="check-box" size={24} color="#b3b3b3" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/home/DrawingScreen")}>
            <MaterialIcons name="brush" size={24} color="#b3b3b3" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/VoiceScreen")}>
            <MaterialIcons name="mic" size={24} color="#b3b3b3" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Gallery clicked")}>
            <MaterialIcons name="image" size={24} color="#b3b3b3" />
          </TouchableOpacity>
        </View>

        {/* Floating Action Button */}
        <TouchableOpacity
            style={styles.fab}
            onPress={() => router.push("/home/CreateNoteScreen")}
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
    paddingHorizontal: 8,
    paddingBottom: 80,
  },
  noteContainer: {
    backgroundColor: "#333",
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
  },
  noteTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  notesList: {
    flex: 1,
    marginTop: 20,
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
