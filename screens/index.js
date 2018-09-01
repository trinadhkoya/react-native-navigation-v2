import Screen1 from "../Screen1";
import {Navigation} from "react-native-navigation";
import Screen2 from "./Screen2";

export function registerScreens() {
    Navigation.registerComponent('example.Screen1', () => Screen1);
    Navigation.registerComponent('example.Screen2', () => Screen2)

}

