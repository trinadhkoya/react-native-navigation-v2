import Screen1 from "../Screen1";
import {Navigation} from "react-native-navigation";
import Drawer from "./Drawer";

export function registerScreens() {
    Navigation.registerComponent('example.Screen1', () => Screen1);
    Navigation.registerComponent('example.Drawer', () => Drawer)

}

