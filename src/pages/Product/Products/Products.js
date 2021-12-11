import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import ProductCard from '../../../components/cards/ProductCard/ProductCard';
import mockData from '../../../MOCK_DATA.json';

export default function Products() {
  const navigation = useNavigation();

  const {products} = mockData;

  function navigate(selectedProduct) {
    navigation.navigate('PrdctDtlPage', {product: selectedProduct});
  }

  const renderProducts = ({item, index}) => (
    <ProductCard
    item={item}
    key={index}
    onSelect={() => navigate(item)}
  />
  )

  return (
    <SafeAreaView>
      <FlatList
        data={products}
        renderItem={renderProducts}
      />
    </SafeAreaView>
  );
}
