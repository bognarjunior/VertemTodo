import { StyleSheet } from "react-native";
import { theme } from "../../theme";

const {colors} = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray_300,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});