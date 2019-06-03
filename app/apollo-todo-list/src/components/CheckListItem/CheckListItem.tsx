import React, { useReducer } from "react";
import { List, Checkbox, withTheme, Theme } from "react-native-paper";
import { ACTION_TYPES } from "../../utils/constants";
import { todoReducer } from "../../reducers";
import { View } from "react-native";
import { NavigationInjectedProps } from "react-navigation";

interface P {
  todo?: any;
  theme: Theme;
}

const CheckListItem: React.FC<P & NavigationInjectedProps> = ({ todo }) => {
  const [state, dispatch] = useReducer(todoReducer, {});
  console.log(todo);
  return (
    <List.Item
      style={{ flex: 1 }}
      title={todo.title}
      description={todo.content}
      titleEllipsizeMode={"clip"}
      onPress={() =>
        dispatch({ type: ACTION_TYPES.TOGGLE_COMPLETED, todo: todo })
      }
      left={props => (
        <Checkbox.Android
          status={"unchecked"}
          onPress={() => {
            dispatch({ type: ACTION_TYPES.TOGGLE_COMPLETED, todo: props.todo });
          }}
        />
      )}
    />
  );
};

export default withTheme(CheckListItem);
