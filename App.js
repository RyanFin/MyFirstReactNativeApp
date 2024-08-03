import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentScreen";
import RyanComponent from "./src/screens/RyanComponent";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColourScreen from "./src/screens/ColourScreen";

const navigator = createStackNavigator(
  {
    // Application routes
    Home: HomeScreen,
    Components: ComponentsScreen,
    RyanComp: RyanComponent,
    List: ListScreen,
    ImageScr: ImageScreen,
    Counter: CounterScreen,
    ColourDemo: ColourScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
