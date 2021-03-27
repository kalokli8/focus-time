import React from "react";
import { View, StyleSheet } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <View style={styles.buttonContainer}>
          <RoundedButton
            size={75}
            title="10"
            onPress={() => onChangeTime(10)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <RoundedButton
            size={75}
            title="15"
            onPress={() => onChangeTime(15)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <RoundedButton
            size={75}
            title="20"
            onPress={() => onChangeTime(20)}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginRight: 10,
  },
});
