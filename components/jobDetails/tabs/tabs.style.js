import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
    alignItems: "center",
  },
  btn: (item, activeTab) => ({
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
    backgroundColor: item === activeTab ? COLORS.primary : COLORS.white,
    borderWidth: item === activeTab ? "" : 0.5,
    borderColor: item === activeTab ? "" : COLORS.secondary,
    borderRadius: SIZES.medium,
    marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  btnText: (item, activeTab) => ({
    fontFamily: "DMMedium",
    fontSize: SIZES.small,
    color: item === activeTab ? COLORS.white : COLORS.secondary,
  }),
});

export default styles;
