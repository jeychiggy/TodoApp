import React from 'react'
import {Formik} from "formik";
import {TextInput, View} from "react-native";
import Button from '../button'
import Styles from './Styles'

const Input = ({initialValues, name, onPress, userUpdate}) => (
    <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}>
        {(formikProps) => (
            <View>
                <TextInput
                    onChangeText={(val) => formikProps.setFieldValue(`${name}`, val.trim())}
                    value={formikProps.values.userId}
                    style={Styles.input}
                />
                <Button
                    disabled={!formikProps.values.userId}
                    buttonText='Proceed'
                    onPress={() => {
                        formikProps.handleSubmit
                        userUpdate({
                            userId: formikProps.values.userId,
                            hasUsedAppBefore: true
                        })
                        onPress()
                    }}
                    touchableStyles={Styles.touchableStyles}
                />
            </View>
        )}
    </Formik>
)

export default Input
