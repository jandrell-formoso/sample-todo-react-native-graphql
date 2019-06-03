import React, { useState, useReducer } from "react";
import {
  Button,
  FAB,
  ActivityIndicator,
  withTheme,
  Theme
} from "react-native-paper";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";
import CheckListItem from "../../components/CheckListItem";
import { todoReducer } from "../../reducers";

interface P {
  title?: string;
  theme: Theme;
}

const GET_ALL_TODOS = gql`
  {
    todos {
      id
      title
      content
      completed
      created_at
    }
  }
`;

const Todos: React.FC<P & NavigationInjectedProps> = props => {
  // initialize hooks
  // use query for get all todos
  const { data, error, loading } = useQuery(GET_ALL_TODOS);
  if (error) {
    console.log(error);
  }
  if (loading) {
    return <ActivityIndicator />;
  }
  console.log(data);
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <FlatList
        data={data.todos}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({ item, index }) => {
          return <CheckListItem todo={item} {...props} />;
        }}
      />
      <FAB
        style={styles.fab}
        icon="add"
        onPress={() => {
          props.navigation.navigate("AddTodo");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    fontWeight: "600"
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  }
});

export default withTheme(Todos);
