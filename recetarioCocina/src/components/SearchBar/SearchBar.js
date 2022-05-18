import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar = () => {
  return (
    <View style={styles.searchB}>
      <Icon
        name="search"
        size={25}
        color="#fff"
        style={styles.iconSearchStyle}
      />
      <Icon
        name="keyboard-voice"
        size={25}
        color="#fff"
        style={styles.iconVoiceStyle}
      />
      <TextInput
        placeholderTextColor={'white'}
        placeholder="What do you want to eat?"
        style={styles.textInputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchB: {
    width: '100%',
    backgroundColor: '#222f3e',
  },
  textInputStyle: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: '#fff',
    marginTop: 90,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#FF479C',
    borderWidth: 1,
    marginHorizontal: 10,
    position: 'relative',
    paddingLeft: 40,
  },
  iconSearchStyle: {
    position: 'absolute',
    zIndex: 50,
    left: 22,
    bottom: 17,
  },
  iconVoiceStyle: {
    position: 'absolute',
    zIndex: 50,
    right: 22,
    bottom: 17,
  },
});
export default SearchBar;
