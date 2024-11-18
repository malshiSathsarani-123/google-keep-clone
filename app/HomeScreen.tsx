// // import React, { useState } from 'react';
// // import { View, FlatList, StyleSheet, Modal, TouchableOpacity, Text } from 'react-native';
// // import NoteCard from '../components/NoteCard';
// // import FloatingButton from '../components/FloatingButton';
// // import SearchBar from '../components/SearchBar';
// // import * as ImagePicker from 'expo-image-picker';


// // const HomeScreen = () => {
// //   const [notes, setNotes] = useState([
// //     { id: '1', title: 'Note 1', content: 'This is the content of note 1' },
// //     { id: '2', title: 'Note 2', content: 'This is the content of note 2' },
// //   ]);
// //   const [isOverlayVisible, setOverlayVisible] = useState(false);
// //   const [imageModalVisible, setImageModalVisible] = useState(false); // State to control image modal
// //   const [imageUri, setImageUri] = useState(null);
// //   const handleAddNote = () => {
// //     setOverlayVisible(!isOverlayVisible);
// //   };

// //   const handleImagePress = () => {
// //     setImageModalVisible(true); // Show image modal when "Image" is clicked
// //   };

// //   const handleCloseImageModal = () => {
// //     setImageModalVisible(false); // Close image modal
// //   };

// //   const openCamera = async () => {
// //     const permission = await ImagePicker.requestCameraPermissionsAsync();  // Request camera permission

// //     if (permission.granted) {
// //       const result = await ImagePicker.launchCameraAsync();  // Open the camera

// //       if (!result.cancelled) {
// //         setImageUri(result.uri);  // Set the captured image URI to state
// //         handleCloseImageModal();  // Close the modal after taking the photo
// //       }
// //     } else {
// //       alert('Camera permission is required to take photos.');
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <SearchBar />
// //       <FlatList
// //         data={notes}
// //         numColumns={2}
// //         renderItem={({ item }) => (
// //           <NoteCard title={item.title} content={item.content} />
// //         )}
// //         keyExtractor={(item) => item.id}
// //         contentContainerStyle={styles.noteList}
// //       />
// //       <FloatingButton onPress={handleAddNote} />

// //       {/* Overlay Menu */}
// //       <Modal transparent={true} visible={isOverlayVisible} animationType="fade">
// //         <TouchableOpacity style={styles.overlayBackground} onPress={handleAddNote}>
// //           <View style={styles.overlayMenu}>
// //             <TouchableOpacity style={styles.overlayButton} onPress={handleImagePress}>
// //               <Text style={styles.overlayButtonText}>Image</Text>
// //             </TouchableOpacity>
// //             <TouchableOpacity style={styles.overlayButton} onPress={() => console.log('Drawing')}>
// //               <Text style={styles.overlayButtonText}>Drawing</Text>
// //             </TouchableOpacity>
// //             <TouchableOpacity style={styles.overlayButton} onPress={() => console.log('List')}>
// //               <Text style={styles.overlayButtonText}>List</Text>
// //             </TouchableOpacity>
// //             <TouchableOpacity style={styles.overlayButton} onPress={() => console.log('Text')}>
// //               <Text style={styles.overlayButtonText}>Text</Text>
// //             </TouchableOpacity>
// //           </View>
// //         </TouchableOpacity>
// //       </Modal>

// //       {/* Modal for image selection */}
// //       <Modal transparent={true} visible={imageModalVisible} animationType="slide">
// //         <TouchableOpacity style={styles.overlayBackground} onPress={handleCloseImageModal}>
// //           <View style={styles.imageModal}>
// //             <Text style={styles.imageModalText}>Add Image</Text>
// //             {/* You can add image picker logic here */}
// //             <TouchableOpacity style={styles.modalButton} onPress={openCamera}>
// //               <Text style={styles.modalButtonText}>Take Photo</Text>
// //             </TouchableOpacity>
// //             <TouchableOpacity style={styles.modalButton} onPress={handleCloseImageModal}>
// //               <Text style={styles.modalButtonText}>Choose Image</Text>
// //             </TouchableOpacity>
// //           </View>
// //         </TouchableOpacity>
// //       </Modal>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     paddingTop: 20,
// //   },
// //   noteList: {
// //     padding: 10,
// //   },
// //   overlayBackground: {
// //     flex: 1,
// //     justifyContent: 'flex-end',
// //     alignItems: 'flex-end',
// //     paddingBottom: 90,
// //     paddingRight: 20,
// //   },
// //   overlayMenu: {
// //     backgroundColor: '#006064', // Dark teal color as shown in your image
// //     paddingVertical: 10,
// //     paddingHorizontal: 15,
// //     borderRadius: 8,
// //     width: 120,
// //   },
// //   overlayButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingVertical: 8,
// //   },
// //   overlayButtonText: {
// //     color: '#FFFFFF',
// //     fontSize: 16,
// //     marginLeft: 10,
// //   },
// //   imageModal: {
// //     backgroundColor: '#ffffff',
// //     padding: 20,
// //     borderTopLeftRadius: 10,
// //     borderTopRightRadius: 10,
// //     width: '100%',
// //     position: 'absolute',
// //     bottom: 0,
// //     paddingBottom: 30,
// //   },
// //   imageModalText: {
// //     color: '#333333',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //     textAlign: 'center',
// //   },
// //   modalButton: {
// //     paddingVertical: 15,
// //     paddingHorizontal: 20,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f0f0f0',
// //   },
// //   modalButtonText: {
// //     color: '#00796b', // Use a color to match the Google Keep style
// //     fontSize: 16,
// //     textAlign: 'center',
// //   },

// // });

// // export default HomeScreen;
// import React, { useState } from 'react';
// import { View, FlatList, StyleSheet, Modal, TouchableOpacity, Text, Alert, Image } from 'react-native'; // Added Image import
// import NoteCard from '../components/NoteCard';
// import FloatingButton from '../components/FloatingButton';
// import SearchBar from '../components/SearchBar';
// import * as ImagePicker from 'expo-image-picker';
// import { router } from 'expo-router';

// const HomeScreen = () => {
//   const [notes, setNotes] = useState([
//     { id: '1', title: 'Note 1', content: 'This is the content of note 1' },
//     { id: '2', title: 'Note 2', content: 'This is the content of note 2' },
//   ]);
//   const [isOverlayVisible, setOverlayVisible] = useState(false);
//   const [imageModalVisible, setImageModalVisible] = useState(false); // State to control image modal
//   // const [imageUri, setImageUri] = useState(null);
//   const [imageUri, setImageUri] = useState<string | null>(null); 

//   const handleAddNote = () => {
//     // setOverlayVisible(!isOverlayVisible);
//     router.push('/')
//   };

//   const handleImagePress = () => {
//     setImageModalVisible(true); // Show image modal when "Image" is clicked
//   };

//   const handleCloseImageModal = () => {
//     setImageModalVisible(false); // Close image modal
//   };

//   const openCamera = async () => {
//     // Request camera permissions
//     const permission = await ImagePicker.requestCameraPermissionsAsync();
  
//     if (permission.granted) {
//       console.log('Camera permission granted');
  
//       try {
//         // Open the camera and capture an image
//         const result = await ImagePicker.launchCameraAsync({
//           allowsEditing: true,  // Optional: Allows editing of the image
//           aspect: [4, 3],       // Optional: Aspect ratio for editing
//           quality: 0.7,         // Optional: Image quality
//         });
  
//         console.log(result); // Log the result to see what is returned
  
//         if (!result.canceled) {
//           // If the user didn't cancel, update state with the image URI
//           setImageUri(result.assets[0].uri);
//           setImageModalVisible(false); // Close the modal after capturing the image
//         }
//       } catch (error) {
//         console.error('Error launching camera:', error); // Handle errors (if any)
//       }
//     } else {
//       // If camera permission is not granted, show an alert
//       alert('Camera permission is required to take photos.');
//     }
//   };
//   const chooseImage = async () => {
//     const permission = await ImagePicker.requestMediaLibraryPermissionsAsync(); // Request library permission
  
//     if (permission.granted) {
//       const result = await ImagePicker.launchImageLibraryAsync(); // Open the image picker
  
//       if (!result.canceled) {  // Use 'canceled' instead of 'cancelled'
//         setImageUri(result.assets[0].uri);  // Access the URI from the first asset
//         handleCloseImageModal();  // Close the modal after choosing an image
//       }
//     } else {
//       alert('Permission to access media library is required.');
//     }
//   };
  
  

//   return (
//     <View style={styles.container}>
//       <SearchBar />
//       <FlatList
//         data={notes}
//         numColumns={2}
//         renderItem={({ item }) => (
//           <NoteCard title={item.title} content={item.content} />
//         )}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.noteList}
//       />
//       <FloatingButton onPress={handleAddNote} />
//       <View style={styles.iconContainer}>
//         <TouchableOpacity style={styles.iconWrapper}>
//           <Image source={require('../assets/images/logo.png')} style={styles.icon} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconWrapper}>
//           <Image source={require('../assets/images/logo.png')} style={styles.icon} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconWrapper}>
//           <Image source={require('../assets/images/logo.png')} style={styles.icon} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconWrapper}>
//           <Image source={require('../assets/images/logo.png')} style={styles.icon} />
//         </TouchableOpacity>
//       </View>
//       {/* Overlay Menu */}
//       <Modal transparent={true} visible={isOverlayVisible} animationType="fade">
//         <TouchableOpacity style={styles.overlayBackground} onPress={handleAddNote}>
//           <View style={styles.overlayMenu}>
//             <TouchableOpacity style={styles.overlayButton} onPress={handleImagePress}>
//               <Text style={styles.overlayButtonText}>Image</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.overlayButton} onPress={() => console.log('Drawing')}>
//               <Text style={styles.overlayButtonText}>Drawing</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.overlayButton} onPress={() => console.log('List')}>
//               <Text style={styles.overlayButtonText}>List</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.overlayButton} onPress={() => console.log('Text')}>
//               <Text style={styles.overlayButtonText}>Text</Text>
//             </TouchableOpacity>
//           </View>
//         </TouchableOpacity>
//       </Modal>

//       {/* Modal for image selection */}
//       <Modal transparent={true} visible={imageModalVisible} animationType="slide">
//         <TouchableOpacity style={styles.overlayBackground} onPress={handleCloseImageModal}>
//           <View style={styles.imageModal}>
//             <Text style={styles.imageModalText}>Add Image</Text>
//             <TouchableOpacity style={styles.modalButton} onPress={openCamera}>
//               <Text style={styles.modalButtonText}>Take Photo</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.modalButton} onPress={chooseImage}>
//               <Text style={styles.modalButtonText}>Choose Image</Text>
//             </TouchableOpacity>
//           </View>
//         </TouchableOpacity>
//       </Modal>

//       {/* Optionally display the selected image */}
//       {imageUri && <Image source={{ uri: imageUri }} style={styles.selectedImage} />}
//     </View>
//   );
// };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     paddingTop: 20,
// //   },
// //   noteList: {
// //     padding: 10,
// //   },
// //   overlayBackground: {
// //     flex: 1,
// //     justifyContent: 'flex-end',
// //     alignItems: 'flex-end',
// //     paddingBottom: 90,
// //     paddingRight: 20,
// //   },
// //   overlayMenu: {
// //     backgroundColor: '#006064', // Dark teal color as shown in your image
// //     paddingVertical: 10,
// //     paddingHorizontal: 15,
// //     borderRadius: 8,
// //     width: 120,
// //   },
// //   overlayButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingVertical: 8,
// //   },
// //   overlayButtonText: {
// //     color: '#FFFFFF',
// //     fontSize: 16,
// //     marginLeft: 10,
// //   },
// //   imageModal: {
// //     backgroundColor: '#ffffff',
// //     padding: 20,
// //     borderTopLeftRadius: 10,
// //     borderTopRightRadius: 10,
// //     width: '100%',
// //     position: 'absolute',
// //     bottom: 0,
// //     paddingBottom: 30,
// //   },
// //   imageModalText: {
// //     color: '#333333',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //     textAlign: 'center',
// //   },
// //   modalButton: {
// //     paddingVertical: 15,
// //     paddingHorizontal: 20,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f0f0f0',
// //   },
// //   modalButtonText: {
// //     color: '#00796b', // Use a color to match the Google Keep style
// //     fontSize: 16,
// //     textAlign: 'center',
// //   },
// //   selectedImage: {
// //     width: 200,
// //     height: 200,
// //     marginTop: 20,
// //     alignSelf: 'center',
// //   },
// //   iconContainer: {
// //     paddingVertical: 20,
// //     alignItems: 'center',
// //     backgroundColor: '#f8f8f8',
// //     width: 60, // Width for the icon sidebar
// //   },
// //   iconWrapper: {
// //     marginVertical: 15,
// //   },
// //   icon: {
// //     width: 30,
// //     height: 30,
// //     tintColor: '#333', // Adjust icon color if needed
// //   },
// //   content: {
// //     flex: 1,
// //     paddingHorizontal: 20,
// //     justifyContent: 'center',
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //   },
// //   text: {
// //     fontSize: 16,
// //     color: '#555',
// //   },
// // });
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 20,
//   },
//   noteList: {
//     padding: 10,
//   },
//   overlayBackground: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'flex-end',
//     paddingBottom: 90,
//     paddingRight: 20,
//   },
//   overlayMenu: {
//     backgroundColor: '#006064', // Dark teal color as shown in your image
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//     width: 120,
//   },
//   overlayButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 8,
//   },
//   overlayButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     marginLeft: 10,
//   },
//   imageModal: {
//     backgroundColor: '#ffffff',
//     padding: 20,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     width: '100%',
//     position: 'absolute',
//     bottom: 0,
//     paddingBottom: 30,
//   },
//   imageModalText: {
//     color: '#333333',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   modalButton: {
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   modalButtonText: {
//     color: '#00796b', // Use a color to match the Google Keep style
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   selectedImage: {
//     width: 200,
//     height: 200,
//     marginTop: 20,
//     alignSelf: 'center',
//   },
//   iconContainer: {
//     position: 'absolute',  // Positions it at the bottom-left of the screen
//     bottom: 20,            // Adds spacing from the bottom of the screen
//     left: 20,              // Adds spacing from the left of the screen
//     flexDirection: 'row',  // Aligns icons horizontally
//     alignItems: 'center',  // Centers icons vertically in the row
//   },
//   iconWrapper: {
//     marginHorizontal: 10,  // Horizontal spacing between icons
//   },
//   icon: {
//     width: 30,
//     height: 30,
//     tintColor: '#333', // Adjust icon color if needed
//   },
// });


// export default HomeScreen;
import React from "react";
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { router } from "expo-router";
import ListScreen from "./home/ListScreen";


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
      <TouchableOpacity onPress={() => router.push("/home/ListScreen")}>
      <MaterialIcons name="check-box" size={24} color="#b3b3b3" />
    </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconAction("Brush")}>
          <MaterialIcons name="brush" size={24} color="#b3b3b3" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconAction("Mic")}>
          <MaterialIcons name="mic" size={24} color="#b3b3b3" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconAction("Gallery")}>
          <MaterialIcons name="image" size={24} color="#b3b3b3" />
        </TouchableOpacity>
      </View>

      {/* Floating Action Button */}
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
