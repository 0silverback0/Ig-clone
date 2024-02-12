import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
// import CommentItem from './CommentItem'; // Custom component for displaying comments
// import LikeButton from './LikeButton'; // Custom component for liking comments
// import ReplyButton from './ReplyButton'; // Custom component for replying to comments

const DropDownExample = () => {
  const [selectedComment, setSelectedComment] = useState('');

  // Function to handle comment selection
  const handleCommentSelect = (value) => {
    setSelectedComment(value);
  };

  // Mock comments data
  const comments = [
    { id: 1, text: 'Great post!', user: 'User 1' },
    { id: 2, text: 'Nice job!', user: 'User 1' },
    { id: 3, text: 'Interesting...', user: 'User 2' },
  ];

  // Transform comments data into dropdown options
  const commentOptions = comments.map((comment) => ({
    label: `${comment.user}: ${comment.text}`,
    value: comment.id.toString(),
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select a comment:</Text>
      <RNPickerSelect
        onValueChange={(value) => handleCommentSelect(value)}
        items={commentOptions}
      />
      {selectedComment ? (
        <View style={styles.selectedCommentContainer}>
          <CommentItem text={comments.find((c) => c.id.toString() === selectedComment)?.text || ''} user={comments.find((c) => c.id.toString() === selectedComment)?.user || ''} />
          <LikeButton />
          <ReplyButton />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'black'
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  selectedCommentContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default DropDownExample;

