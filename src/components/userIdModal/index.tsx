import React from 'react'
import {Modal, View, Text} from "react-native";
import Styles from './Styles'
import Input from "../input";

const UserIdModal = ({isModalVisible, onPressProceed, formInitialValues, formName, userUpdate}) => {
    return (
        <Modal transparent animationType='fade' visible={isModalVisible}>
            <View style={Styles.overlay}>
                <View style={Styles.modalContent}>
                    <Text style={Styles.caption}>Please enter a user ID</Text>
                    <Input
                        userUpdate={userUpdate}
                        onPress={onPressProceed}
                        initialValues={formInitialValues}
                        name={formName}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default UserIdModal
