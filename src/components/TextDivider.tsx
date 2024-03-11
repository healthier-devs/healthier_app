import { StyleSheet, View } from "react-native";

import { Text } from "react-native";
function TextDivider({
  text,
  color,
  ...props
}: { text: string; color?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <View style={styles.textDivider}>
      <View style={[styles.line, { backgroundColor: color }]} />
      <Text style={[styles.text, { color: color }]}>{text}</Text>
      <View style={[styles.line, { backgroundColor: color }]} />
    </View>
  );
}

export default TextDivider;

const styles = StyleSheet.create({
  textDivider: {
    gap: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    backgroundColor: "#787c83",
    height: 0.6,
    flex: 1,
  },
  text: {
    color: "#787c83",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
    letterSpacing: -0.3,
  },
});
