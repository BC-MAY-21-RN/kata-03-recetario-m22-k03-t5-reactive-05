import React, {useState} from 'react';
import {View, TextInput, SafeAreaView, StyleSheet} from 'react-native';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const onChangeText = event => {
    setSearch(event.target.value);
  };
  return (
    <View>
      <TextInput
        style={styles.searchB}
        placeholder="What do you want to eat?"
        onChangeText={onChangeText}
        value={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchB: {
    borderWidth: 1,
    marginLeft: 10,
  },
});
export default SearchBar;
