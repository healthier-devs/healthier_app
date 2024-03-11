import { StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";

interface IButtonProps {
  onClick: () => void;
  height: number;
  backgroundColor?: string;
  borderRadius?: number;
  children: React.ReactNode;
}

const Button = ({
  onClick,
  backgroundColor,
  height,
  borderRadius,
  children,
}: IButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        {
          height: height,
          backgroundColor: backgroundColor || "#007bff", // Set default color if not provided
          borderRadius: borderRadius || 30, // Set default radius if not provided
        },
      ]}
      onPress={onClick}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    display: "flex",
    justifyContent: "center",
  },
  text: {
    color: "#fdfdfd",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: -0.3,
  },
});

export default Button;
