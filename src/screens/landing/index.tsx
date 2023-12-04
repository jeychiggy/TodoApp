import React from 'react'
import {View, Image, Text} from 'react-native'
import landingImage from '../../../assets/landingImage.png'
import {Button} from '../../components'
import Styles from "./Styles";
import {connect} from "react-redux";

const caption = 'Get started with creating your to-do list,\nsearching through the list of tasks and updating your tasks on the go'

const captionForReturningUser = 'View your tasks for the day and tick them off on the go'

const Landing = ({navigation, hasUsedAppBefore}) => {

    const handleButtonPress = React.useCallback(() => {
        navigation.navigate('Home');
    }, [navigation]);

    return(
        <View style={Styles.container}>
            <Image source={landingImage} style={Styles.image} resizeMode='contain'/>
            <Text style={Styles.heading}>
                To-Do List
            </Text>
            <Text style={Styles.caption}>
                {hasUsedAppBefore ? captionForReturningUser : caption}
            </Text>
            <Button
                buttonText={hasUsedAppBefore ? 'View your Todos' : 'Get Started'}
                touchableStyles={Styles.button}
                onPress={handleButtonPress}
            />
        </View>
    )
}

const mapStateToProps = state => ({
    hasUsedAppBefore: state.persisted.hasUsedAppBefore,
});

export default connect(mapStateToProps)(Landing)
