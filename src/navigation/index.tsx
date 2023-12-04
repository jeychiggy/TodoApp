import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens'

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Landing'>
                <Stack.Screen name='Home' component={Screens.Home}/>
                <Stack.Screen name='Landing' component={Screens.Landing} options={{headerShown: false}}/>
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default AppStack
