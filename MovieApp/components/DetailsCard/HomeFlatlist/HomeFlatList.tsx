import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type homeListProp = {
  data: string[];
  renderItem: ({item}: any) => React.JSX.Element;
};

const HomeFlatList: React.FC<homeListProp> = ({data, renderItem}) => {
  return (
    <FlatList
      style={styles.listStyle}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item: any) => item.id}
      horizontal
    />
  );
};

export default HomeFlatList;

const styles = StyleSheet.create({
  listStyle: {
    flex: 1,
    paddingVertical: 10,
  },
});