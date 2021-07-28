const url = 'https://jsonplaceholder.typicode.com/users';

import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  StatusBar,
  TextInput,
  Dimensions,
  Button,
} from 'react-native';

import UserItem from '../components/UserItem';
import CustomButton from '../components/CustomButton';

const {width} = Dimensions.get('window');

const UserListScreen = props => {
  const [users, setUsers] = useState();
  const [sort, setSort] = useState(true);
  const [filteredUser, setFilteredUser] = useState();
  const [searchText, setSearchText] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    getUser();
    console.log('li');
  }, []);

  const getUser = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const resData = await res.json();
      setUsers(resData);
      setFilteredUser(resData);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const filterUser = user => {
    let data = users.filter(item =>
      item.username.toUpperCase().includes(user.toUpperCase()),
    );
    setFilteredUser(data);
    setSearchText(user);
  };

  const sortByAscending = () => {
    console.log('sort');
    setFilteredUser(
      filteredUser.sort((a, b) => {
        if (a.username > b.username) {
          return 1;
        } else {
          return -1;
        }
      }),
    );
    setSort(!sort);
    console.log(filteredUser);
  };

  const sortByDescending = () => {
    setFilteredUser(
      filteredUser.sort((a, b) => {
        if (a.username < b.username) {
          return 1;
        } else {
          return -1;
        }
      }),
    );
    setSort(!sort);
    console.log(filteredUser);
  };

  const renderUserList = ({item}) => {
    return (
      <UserItem
        userName={item.username}
        company={item.company}
        address={item.address}
        click={() => {
          props.navigation.navigate('userDetail', {userDetail: item});
        }}
      />
    );
  };
  const renderEmptyList = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 250,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          Searched user not found!
        </Text>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="#32ccbc" size="large" />
      </View>
    );
  }

  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#32ccbc" />
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search users here.."
            value={searchText}
            onChangeText={text => {
              filterUser(text);
            }}
          />

          <CustomButton title="A-Z" onSort={sortByAscending} />
          <CustomButton title="Z-A" onSort={sortByDescending} />
        </View>
      </View>
      <View style={{paddingBottom: 30}}>
        <FlatList
          data={filteredUser}
          extraData={sort}
          keyExtractor={item => item.id}
          renderItem={renderUserList}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmptyList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#32ccbc',
    justifyContent: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 30,
    letterSpacing: 2,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: width * 0.65,
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});

export default UserListScreen;
