import React from "react";
import { View, Text } from "react-native";

import styles from "./specifics.style";

const Specifics = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.dataContainer}>
        {data.map((item, index) => (
          <View style={styles.dataWrapper} key={item + index}>
            <View style={styles.dataDot} />
            <Text style={styles.dataText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
