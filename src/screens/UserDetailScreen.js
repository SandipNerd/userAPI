import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

import Content from '../components/Content';

const UserDetailScreen = props => {
  const {userDetail} = props.route.params;

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{height: 200, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
            }}
          />
        </View>
        <View>
          <Content title="Full Name" content={userDetail.name} />
          <Content title="Email" content={userDetail.email} />
          <Content title="Phone" content={userDetail.phone} />
          <Content title="Website" content={userDetail.website} />
          <View style={styles.row}>
            <Text style={styles.title}>Address</Text>
            <Text>
              {userDetail.address.street}, {userDetail.address.suite},{' '}
              {userDetail.address.city}
            </Text>
          </View>
          <Content title="Company" content={userDetail.company.name} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default UserDetailScreen;
