import {useRoute} from '@react-navigation/core';
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './MenuDetail.styles';

export default function MenuDetail() {
  
  const route = useRoute();
  const {menuItem} = route.params;
  const {name, description, price, ingredients} = menuItem;

  const renderIngredients = (item, index) => {
    return (
      <View key={index}  style={styles.badge_container}>
        <Text style={styles.badge_label}>{item}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.label}>Name: {name}</Text>
        <Text style={styles.label}>Description: {description}</Text>
        <Text style={styles.label}>Price: {price}</Text>
        <Text style={styles.label}>Ingredients:</Text>
        <View style={styles.ingredients}>
          {ingredients.split(',').map(renderIngredients)}
        </View>
      </View>
    </SafeAreaView>
  );
}
