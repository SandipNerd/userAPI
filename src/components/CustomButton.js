import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

const CustomButton = props => {
  return (
    <TouchableNativeFeedback onPress={props.onSort}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#32ccbc',
    fontSize: 18,
  },
});

export default CustomButton;
