import { createStackNavigator } from 'react-navigation-stack';
import RestaurantsScreen from '../screens/Restaurants';
import { DefaultTransition } from 'react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/TransitionPresets';

const RestaurantsScreenStacks = createStackNavigator({
    Restaurants: {
        screen: RestaurantsScreen,
        navigationOptions: () => ({
            title: "Restaurantes"
        })
    }
});

export default RestaurantsScreenStacks;
