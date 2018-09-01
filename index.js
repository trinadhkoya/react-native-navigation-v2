import {Navigation} from "react-native-navigation";
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
                        },
                        visible: true
                    }
                },
                center: {
                    bottomTabs: {
                        children: [
                            {
                                component: {
                                    name: 'example.Screen1',
                                    passProps: {
                                        text: 'This is tab 1',
                                        myFunction: () => 'Hello from a function!',
                                    },
                                },
                            },
                            {
                                component: {
                                    name: 'example.Drawer',
                                    passProps: {
                                        text: 'This is tab 2',
                                    },
                                },
                            },
                        ],
                    },
                },
            },

        }

    });
});
