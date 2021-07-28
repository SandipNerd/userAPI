import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Content = props => {
  return (
    <View style={styles.info}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.content}>{props.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default Content;
