import React, {memo} from 'react'
import {Formik} from "formik";
import {TextInput, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Styles from "../addTodoInput/Styles";

const SearchInput = ({onPressSearch, onChangeText}) => (
    <Formik initialValues={{searchTerm: ''}} onSubmit={(values) => console.log(values)}>
        {(formikProps) => (
            <View style={{flexDirection: 'row', marginLeft: 20}}>
                <TextInput
                    onChangeText={(val) => {
                        formikProps.setFieldValue('searchTerm', val)
                        onChangeText(val)
                    }}
                    value={formikProps.values.searchTerm}
                    placeholder='Search for your task...'
                    placeholderTextColor={'#5F6077'}
                    style={[Styles.input, {width: '80%', alignSelf: 'center'}]}
                />
                <Ionicons
                    name="search-outline"
                    size={24}
                    style={{marginTop: 24, marginLeft: 32}}
                    onPress={() => {
                        formikProps.handleSubmit
                        onPressSearch()
                    }}
                />

            </View>
        )}
    </Formik>
)

export default memo(SearchInput)
