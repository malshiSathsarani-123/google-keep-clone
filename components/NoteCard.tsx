// components/NoteCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface NoteCardProps {
  title: string;
  content: string;
}

const NoteCard: React.FC<NoteCardProps> = ({ title, content }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#FFECB3',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 8,
    fontSize: 14,
  },
});

export default NoteCard;
