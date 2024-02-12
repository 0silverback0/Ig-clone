import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonGroup, Icon } from '@rneui/themed';

const Buttons = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const buttons = [
    { element: () => <Icon name="home" type="font-awesome" color="white" />, style: { backgroundColor: '#3498db' } },
    { element: () => <Icon name="search" type="font-awesome" color="white" />, style: { backgroundColor: '#e74c3c' } },
    { element: () => <Icon name="plus" type="font-awesome" color="white" />, style: { backgroundColor: '#2ecc71' } },
    { element: () => <Icon name="film" type="font-awesome" color="white" />, style: { backgroundColor: '#f39c12' } },
    { element: () => <Icon name="user" type="font-awesome" color="white" />, style: { backgroundColor: '#f39c12' } },
  ];

  return (
    <View style={styles.container}>
      <ButtonGroup
        buttons={buttons}
        selectedIndex={selectedIndex}
        onPress={(value) => {
          setSelectedIndex(value);
        }}
        containerStyle={styles.buttonGroupContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
     backgroundColor: 'black'
  },
  buttonGroupContainer: {
    height: 75,
    width: 425,
    backgroundColor: 'black',
    borderWidth: 0, 
    borderColor: 'transparent' 
  },
});

export default Buttons;
