import {
  createAppContainer,
  createStackNavigator,
  NavigationRouteConfigMap,
  StackNavigatorConfig
} from "react-navigation";

import Todos from "../screens/Todos";
import AddTodo from "../screens/AddTodo";

const routes: NavigationRouteConfigMap = {
  Todos: {
    screen: Todos,
    navigationOptions: ({ navigation }: any) => ({
      title: "Todos"
    })
  },
  AddTodo: {
    screen: AddTodo,
    navigationOptions: ({ navigation }: any) => ({
      title: "Add Todo"
    })
  }
};

const defaultOptions: StackNavigatorConfig = {
  mode: "modal"
};

const mainNavigator = createStackNavigator(routes, defaultOptions);

const appContainer = createAppContainer(mainNavigator);

export default appContainer;
