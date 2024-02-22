import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type headerProps = {
  title: string;
};

const HomeHeader: React.FC<headerProps> = ({title}) => {
  return (
    <View>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    paddingVertical: 15,
  },
});