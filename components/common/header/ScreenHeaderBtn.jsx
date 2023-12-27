import React from "react";
import { Pressable, Image } from "react-native";

import styles from "./screenHeader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlerPress }) => {
  return (
    <Pressable style={styles.btnContainer} onPress={handlerPress}>
      <Image
        source={iconUrl}
        style={{ ...styles.btnImg(dimension), resizeMode: "cover" }}
      />
    </Pressable>
  );
};

export default ScreenHeaderBtn;
