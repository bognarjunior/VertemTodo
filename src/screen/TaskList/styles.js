import { StyleSheet } from "react-native";
import { theme } from "../../theme";

const {colors} = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10
  },
  task: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: colors.gray_200,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: colors.gray_800,
  },
});