import {useRoute} from '@react-navigation/core';
import React from 'react';
import {View, SafeAreaView, Text, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './ProductDetail.styles';

export default function ProductDetail() {
  const route = useRoute();

  const {product} = route.params;

  const {imageURL, name, isPopular, price, ingredients, description} = product;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={{
            uri: imageURL,
          }}
        />
        <View style={styles.name_container}>
          <Text style={styles.name_label}>{name}</Text>
          {isPopular && <Icon name="star" color="orange" size={25} />}
        </View>
        <ScrollView horizontal bounces={false}>
          {ingredients.map((ingredient, index) => (
            <View style={styles.badge_container} key={index}>
              <Text style={styles.badge_label}>{ingredient}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.description_container}>
          <Text style={styles.description}>{description}</Text>
        </View>
        <Text style={styles.price}>{price} TL</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
