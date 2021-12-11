import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './ProductCard.styles';


export default function ProductCard({item, onSelect}) {

  const {imageURL, isPopular, name} = item
  
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: imageURL,
        }}>
        <View style={styles.name_container}>
          <Text style={styles.name_label}>{name}</Text>
          {isPopular && <Icon name="star" color="orange" size={25} />}
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
