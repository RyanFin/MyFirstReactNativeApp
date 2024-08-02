import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentScreen";
import RyanComponent from "./src/screens/RyanComponent";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    // Application routes
    Home: HomeScreen,
    Components: ComponentsScreen,
    RyanComp: RyanComponent,
    List: ListScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
