import React, {memo} from 'react'
import {TouchableOpacity, Text, StyleProp, ViewStyle} from "react-native";
import Styles from "./Styles";

const Button = ({
                    buttonText,
                    onPress,
                    touchableStyles,
                    disabled
}: {
    buttonText: string,
    onPress: () =>void,
    touchableStyles?: StyleProp<ViewStyle>,
    disabled: boolean
}) => {
    return(
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[Styles.touchableContainer,
                disabled && {opacity: 0.5},
                touchableStyles
            ]}>
            <Text style={{color: 'white'}}>
                {buttonText}
            </Text>
        </TouchableOpacity>
    )

}

export default memo(Button)
