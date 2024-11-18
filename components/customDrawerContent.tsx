// import { View, Text, Pressable, Image } from 'react-native'
// import React from 'react'
// import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'
// import { useNavigation } from 'expo-router';
// import { DrawerActions } from '@react-navigation/native';

// export default function CustomDrawerContent(props:any) {

//     const {bottom} = useSafeAreaInsets();
//     const navigation = useNavigation();

//     const closeDrawer = ()=>{
//         navigation.dispatch(DrawerActions.closeDrawer())
//     }
//   return (
//     <View
//         style={{flex: 1}}
//     >
//       <DrawerContentScrollView {...props} scrollEnabled={false}>
//         <View style={{padding: 20}}>
//             <Image style={{height: 35}} resizeMode='contain' source={require('../assets/images/logo.png')} />
//         </View>
//         <DrawerItemList {...props} />
//       </DrawerContentScrollView>

//       <Pressable onPress={closeDrawer} style={{padding: 20, paddingBottom: bottom+10}}>
//         <Text>Logout</Text>
//       </Pressable>
//     </View>
//   )
// }
// import { View, Text, Pressable, Image } from 'react-native';
// import React from 'react';
// import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { useNavigation } from 'expo-router';
// import { DrawerActions } from '@react-navigation/native';

// const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
//   const { bottom } = useSafeAreaInsets();
//   const navigation = useNavigation();

//   const closeDrawer = () => {
//     navigation.dispatch(DrawerActions.closeDrawer());
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: '#2C2C2C' }}>
//       <DrawerContentScrollView {...props}>
//         {/* Header with Profile Icon */}
//         <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center' }}>
//           <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Google Keep</Text>
//         </View>

//         {/* Menu Items */}
//         <View style={{ paddingHorizontal: 20 }}>
//           <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
//             <Image source={require('../assets/images/favicon.png')} style={{ width: 24, height: 24, marginRight: 15 }} />
//             <Text style={{ color: 'white', fontSize: 16 }}>Notes</Text>
//           </Pressable>
//           <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
//             <Image source={require('../assets/images/favicon.png')} style={{ width: 24, height: 24, marginRight: 15 }} />
//             <Text style={{ color: 'white', fontSize: 16 }}>Reminders</Text>
//           </Pressable>

//           <Text style={{ color: 'grey', fontSize: 12, marginTop: 15 }}>LABELS</Text>
//           <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
//             <Image source={require('../assets/images/favicon.png')} style={{ width: 24, height: 24, marginRight: 15 }} />
//             <Text style={{ color: 'white', fontSize: 16 }}>Create new label</Text>
//           </Pressable>
//           <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
//             <Image source={require('../assets/images/favicon.png')} style={{ width: 24, height: 24, marginRight: 15 }} />
//             <Text style={{ color: 'white', fontSize: 16 }}>Archive</Text>
//           </Pressable>
//           <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
//             <Image source={require('../assets/images/favicon.png')} style={{ width: 24, height: 24, marginRight: 15 }} />
//             <Text style={{ color: 'white', fontSize: 16 }}>Trash</Text>
//           </Pressable>

//           <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
//             <Image source={require('../assets/images/favicon.png')} style={{ width: 24, height: 24, marginRight: 15 }} />
//             <Text style={{ color: 'white', fontSize: 16 }}>Settings</Text>
//           </Pressable>
//           <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
//             <Image source={require('../assets/images/favicon.png')} style={{ width: 24, height: 24, marginRight: 15 }} />
//             <Text style={{ color: 'white', fontSize: 16 }}>Send app feedback</Text>
//           </Pressable>
//           <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
//             <Image source={require('../assets/images/favicon.png')} style={{ width: 24, height: 24, marginRight: 15 }} />
//             <Text style={{ color: 'white', fontSize: 16 }}>Help</Text>
//           </Pressable>
//         </View>
//       </DrawerContentScrollView>

//       {/* Bottom Logout Button */}
//       <Pressable onPress={closeDrawer} style={{ padding: 20, paddingBottom: bottom + 10, borderTopWidth: 1, borderTopColor: '#3A3A3A' }}>
//         <Text style={{ color: 'white', fontSize: 16 }}>Logout</Text>
//       </Pressable>
//     </View>
//   );
// };

// export default CustomDrawerContent;
import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation();

  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#2C2C2C', width: 250 }}> {/* Adjust width here */}
      <DrawerContentScrollView {...props}>
        {/* Header with Profile Icon */}
        <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Google Keep</Text>
        </View>

        {/* Menu Items */}
        <View style={{ paddingHorizontal: 20 }}>
          <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
            <Image source={require('../assets/images/favicon.png')} style={{ width: 24, height: 24, marginRight: 15 }} />
            <Text style={{ color: 'white', fontSize: 16 }}>Notes</Text>
          </Pressable>
          <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
            <Image source={require('../assets/images/favicon.png')} style={{ width: 24, height: 24, marginRight: 15 }} />
            <Text style={{ color: 'white', fontSize: 16 }}>Reminders</Text>
          </Pressable>

          <Text style={{ color: 'grey', fontSize: 12, marginTop: 15 }}>LABELS</Text>
          <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
            <Image source={require('../assets/images/favicon.png')} style={{ width: 24, height: 24, marginRight: 15 }} />
            <Text style={{ color: 'white', fontSize: 16 }}>Create new label</Text>
          </Pressable>
          <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
            <Image source={require('../assets/images/favicon.png')} style={{ width: 24, height: 24, marginRight: 15 }} />
            <Text style={{ color: 'white', fontSize: 16 }}>Archive</Text>
          </Pressable>
          <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
            <Image source={require('../assets/images/favicon.png')} style={{ width: 24, height: 24, marginRight: 15 }} />
            <Text style={{ color: 'white', fontSize: 16 }}>Trash</Text>
          </Pressable>

          <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
            <Image source={require('../assets/images/favicon.png')} style={{ width: 24, height: 24, marginRight: 15 }} />
            <Text style={{ color: 'white', fontSize: 16 }}>Settings</Text>
          </Pressable>
          <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
            <Image source={require('../assets/images/favicon.png')} style={{ width: 24, height: 24, marginRight: 15 }} />
            <Text style={{ color: 'white', fontSize: 16 }}>Send app feedback</Text>
          </Pressable>
          <Pressable style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
            <Image source={require('../assets/images/favicon.png')} style={{ width: 24, height: 24, marginRight: 15 }} />
            <Text style={{ color: 'white', fontSize: 16 }}>Help</Text>
          </Pressable>
        </View>
      </DrawerContentScrollView>

      {/* Bottom Logout Button */}
      <Pressable onPress={closeDrawer} style={{ padding: 20, paddingBottom: bottom + 10, borderTopWidth: 1, borderTopColor: '#3A3A3A' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default CustomDrawerContent;
