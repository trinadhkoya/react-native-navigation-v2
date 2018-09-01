/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {Navigation} from 'react-native-navigation';

import {registerScreens} from './screens';
import {iconsMap,iconsLoaded} from "./utils/AppIcons";


registerScreens();
iconsLoaded.then(() => {
    Navigation.startSingleScreenApp({
        screen: {
            // AuthScreen
            screen: 'example.Screen1',

            navigatorButtons: {
                leftButtons: [
                    {
                        icon: iconsMap['md-menu'],
                        title: "Menu",
                        id: "sideDrawerToggle"
                    }
                ]
            },

            navigatorStyle: {
                navBarBackgroundColor: "#3F51B5",
                navBarNoBorder: true,
                navBarButtonColor: "white"
            }
        },
        drawer: {
            left: {
                screen: 'example.Screen2'
            }
        }
    });
});

