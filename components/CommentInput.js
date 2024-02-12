import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CommentInput = () => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (text) => {
    setComment(text);
  };

  const handleCommentSubmit = () => {
    // Implement comment submission logic here
    console.log('Comment submitted:', comment);
    setComment('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add a comment..."
          placeholderTextColor="white"
          onChangeText={handleCommentChange}
          value={comment}
          style={styles.input}
          multiline={true}
        />
        <TouchableOpacity onPress={handleCommentSubmit} style={styles.submitButton}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    color: 'white',
  },
  submitButton: {
    backgroundColor: 'black',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginLeft: 10,
  },
  submitText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CommentInput;

