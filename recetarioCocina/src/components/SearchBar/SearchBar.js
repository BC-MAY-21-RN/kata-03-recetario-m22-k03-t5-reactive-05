import React, {useState} from 'react';
import {View, TextInput, SafeAreaView, StyleSheet} from 'react-native';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const onChangeText = event => {
    setSearch(event.target.value);
  };
  return (
    <View style={styles.searchB}>
      <TextInput
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
    marginTop: 70,
    marginBottom: 5,
    width: '90%',
  },
});
export default SearchBar;
