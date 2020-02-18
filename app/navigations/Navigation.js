import React from 'react';
import { Icon } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import RestaurantsStacks from './RestaurantsStacks';

const NavigationStacks = createBottomTabNavigator({
    Restaurants: {
        screen: RestaurantsStacks,
        navigationOptions: () => ({
            tabBarLabel: 'Restaurantes',
            tabbarIcon: ({ tintColor }) => (
                <Icon
                    type='material-community'
                    name='compass-outline'
                    size={22}
                    color={tintColor}
                />
            )
        })
    }
});

export default createAppContainer(NavigationStacks);