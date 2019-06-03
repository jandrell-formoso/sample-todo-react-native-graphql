import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { withTheme, DeepPartial, Theme, FAB } from "react-native-paper";
import moment from "moment";
import theme from "../../../theme";

interface P {
  theme: Theme;
}

const AddTodo: React.FC<P> = ({ theme }) => {
  const [lastUpdated, setLastUpdated] = useState(moment().calendar());
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: theme.colors.disabled
        }}
      >
        Last Updated: {lastUpdated}
      </Text>
      <TextInput
        style={{ fontSize: 20, fontWeight: "600" }}
        onChangeText={() => {
          setLastUpdated(moment().calendar());
        }}
        placeholder={"Title"}
        multiline={true}
        autoFocus={true}
        maxLength={1000}
      />
      <TextInput
        style={{ fontSize: 18 }}
        onChangeText={() => {
          setLastUpdated(moment().calendar());
        }}
        placeholder={"Write a note"}
        multiline={true}
        maxLength={1000}
      />
      <FAB icon={"save"} style={styles.fab} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16
  }
});

export default withTheme(AddTodo);
