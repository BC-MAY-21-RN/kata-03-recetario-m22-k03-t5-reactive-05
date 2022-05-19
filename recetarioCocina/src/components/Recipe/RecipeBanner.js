import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export const RecipeBanner = ({image}) => {
  const [like, setLike] = useState(false);
  const [shared, setShared] = useState(false);
  const onLikePress = () => setLike(!like);
  const onSharedPress = () => setShared(!shared);
  const navigation = useNavigation();
  return (
    <View style={styles.bannerContainer}>
      <TouchableOpacity style={styles.iconCloseStyle}>
        <IonIcon
          name="close"
          size={30}
          style={styles.iconClosedStyle}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconLikeStyle}>
        <Icon
          name="heart-o"
          size={30}
          style={like ? styles.iconLikedStyle : styles.iconUnlikedStyle}
          onPress={onLikePress}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconShareStyle} onPress={onSharedPress}>
        <IonIcon
          name="share-outline"
          style={shared ? styles.iconSharedStyle : styles.iconUnsharedStyle}
          size={30}
        />
      </TouchableOpacity>
      <View style={styles.bannerShadow} />
      <Image
        source={{
          uri: image,
        }}
        style={styles.recipeImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLikeStyle: {
    position: 'absolute',
    right: 10,
    zIndex: 50,
    top: 15,
  },
  iconUnlikedStyle: {
    position: 'absolute',
    right: 15,
    zIndex: 50,
    top: 15,
    color: 'white',
  },
  iconLikedStyle: {
    position: 'absolute',
    right: 15,
    zIndex: 50,
    top: 15,
    color: '#FF479C',
  },
  iconUnsharedStyle: {
    position: 'absolute',
    right: 15,
    zIndex: 50,
    top: 15,
    color: 'white',
  },
  iconShareStyle: {
    position: 'absolute',
    right: 50,
    zIndex: 50,
    top: 15,
  },
  iconSharedStyle: {
    position: 'absolute',
    right: 15,
    zIndex: 50,
    top: 15,
    color: '#FF479C',
  },
  iconCloseStyle: {
    position: 'absolute',
    left: 60,
    zIndex: 50,
    top: 15,
  },
  iconClosedStyle: {
    position: 'absolute',
    right: 15,
    zIndex: 50,
    top: 15,
    color: 'white',
  },
  recipeImage: {
    width: '100%',
    height: 300,
  },
  bannerContainer: {
    position: 'relative',
  },
  bannerShadow: {
    backgroundColor: 'rgba(0,0,0,.4)',
    position: 'absolute',
    zIndex: 10,
    height: '100%',
    width: '100%',
  },
});
