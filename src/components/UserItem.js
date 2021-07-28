import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';

const imageUrl =
  'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60';

const {width} = Dimensions.get('window');

const UserItem = props => {
  return (
    <TouchableNativeFeedback onPress={props.click}>
      <View style={styles.card}>
        <Image source={{uri: imageUrl}} style={styles.image} />
        <View style={styles.content}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            {props.userName}
          </Text>
          <Text>
            <Text style={{fontWeight: 'bold'}}>Company name: </Text>
            <Text>{props.company.name}</Text>
          </Text>
          <Text>
            <Text>{props.address.street}, </Text>
            <Text>{props.address.city}</Text>
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: width / 5,
    height: width / 5,
    borderRadius: width / 5 / 2,
  },
  content: {
    paddingHorizontal: 20,
  },
});

export default UserItem;
