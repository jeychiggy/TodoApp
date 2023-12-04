import React, {memo} from 'react'
import {Modal, View} from "react-native";
import Styles from "../userIdModal/Styles";
import AddTodoInput from "../addTodoInput";

const AddTodoModal = ({onPressAdd, isModalVisible, isEditing, selectedTask}) => {
return(
    <Modal transparent animationType='fade' visible={isModalVisible}>
        <View style={Styles.overlay}>
            <View style={Styles.modalContent}>
                <AddTodoInput
                    isEditing={isEditing}
                    selectedTask={selectedTask}
                    onPress={onPressAdd}
                />
            </View>
        </View>
    </Modal>
)}

export default memo(AddTodoModal)
