import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const AccountSelectionScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="close" size={24} color="white" />
        <Text style={styles.title}>Google</Text>
        <Ionicons name="chevron-down" size={24} color="white" />
      </View>

      <Text style={styles.chooseText}>Choose an Account</Text>

      <ScrollView style={styles.accountList}>
        <TouchableOpacity style={styles.accountItem}>
          <Image source={{ uri: 'https://example.com/profile1.jpg' }} style={styles.profileImage} />
          <View>
            <Text style={styles.accountName}>Malshi Sathsarani</Text>
            <Text style={styles.accountEmail}>malshisathsarani78@gmail.com</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.accountItem}>
          <View style={styles.iconContainer}>
            <Text style={styles.initial}>M</Text>
          </View>
          <View>
            <Text style={styles.accountName}>Maneesha Dishan</Text>
            <Text style={styles.accountEmail}>maneeshadilshan70@gmail.com</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <MaterialIcons name="person-add" size={24} color="white" />
          <Text style={styles.optionText}>Add another account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <MaterialIcons name="settings" size={24} color="white" />
          <Text style={styles.optionText}>Manage accounts on this device</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Privacy Policy</Text>
        <Text style={styles.footerText}>•</Text>
        <Text style={styles.footerText}>Terms of Service</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  chooseText: {
    fontSize: 18,
    color: 'white',
    marginVertical: 8,
  },
  accountList: {
    marginTop: 8,
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e91e63',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  initial: {
    color: 'white',
    fontSize: 18,
  },
  accountName: {
    fontSize: 16,
    color: 'white',
  },
  accountEmail: {
    fontSize: 14,
    color: '#aaa',
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  optionText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
    marginHorizontal: 4,
  },
});

export default AccountSelectionScreen;
