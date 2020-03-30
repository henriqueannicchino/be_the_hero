import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigation screenOptions={{ headerShown: false }}>
                <AppStack.screen name="Incidents" component={Incidents} />
                <AppStack.screen name="Detail" component={Detail} />
            </AppStack.Navigation>
        </NavigationContainer>
    );
}