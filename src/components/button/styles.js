import { StyleSheet } from "react-native";
import { theme } from "../../theme";

const { colors } = theme;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 54,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.gray_400
  },
  title: {
    color: colors.white,
    fontSize: 18,
  }
})