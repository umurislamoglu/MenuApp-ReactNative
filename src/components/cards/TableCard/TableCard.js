import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './TableCard.styles';

export default function MenuCard({item, onSelect}) {
  const {isActive, name, orders} = item;

  const tableColor = isActive ? 'green' : '#bdbdbd';

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={[styles.container, {borderColor: tableColor}]}>
        <View style={styles.image}>
          {orders.map((order, i) => (
            <Text key={i} style={styles.order}>
              ⏺ {order.name}
            </Text>
          ))}
        </View>
        <View style={styles.name_container}>
          <Text style={styles.name_label}>{name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

