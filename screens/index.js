import Screen1 from "../Screen1";
import {Navigation} from "react-native-navigation";

export function registerScreens() {
    Navigation.registerComponent('example.Screen1', () => Screen1)
}

