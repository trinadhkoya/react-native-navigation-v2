import {Navigation} from "react-native-navigation";
import App from "./App";
import Screen1 from "./Screen1";
import {registerScreens} from "./screens";

registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            sideMenu: {
                left: {
                    component: {
                        name: 'example.Drawer',
                        passProps: {
                            text: 'This is a left side menu screen'
                        }
                    }
                },
                center: {
                    component: {
                        name: 'example.Screen1'
                    },
                },
                right: {
                    component: {
                        name: 'example.Screen1',
                        passProps: {
                            text: 'This is a right side menu screen'
                        }
                    }
                }
            }
        }
    });
});
