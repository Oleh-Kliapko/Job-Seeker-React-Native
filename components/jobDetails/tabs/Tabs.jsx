import React from "react";
import { View, Text, Pressable, FlatList } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <Pressable
            style={styles.btn(item, activeTab)}
            onPress={() => setActiveTab(item)}
          >
            <Text style={styles.btnText(item, activeTab)}>{item}</Text>
          </Pressable>
        )}
        contentContainerStyle={{ columnGap: SIZES.xxs }}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Tabs;
