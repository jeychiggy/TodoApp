import React, { useCallback } from 'react';
import { Formik } from 'formik';
import { TextInput, View } from 'react-native';
import Styles from './Styles';
import Button from '../button';

type Todo = {
    id: number;
    title: string;
    body: string;
    completed: boolean;
}

const AddTodoInput = ({ onPress, isEditing, selectedTask }: {onPress: (...params) => void, isEditing: boolean, selectedTask: Todo}) => {

    const handleSubmit = useCallback(
        (values) => {
            onPress({ title: values.title, body: values.body });
        },
        [onPress]
    );

    return (
        <Formik
            initialValues={{
                title: isEditing ? selectedTask?.title : '',
                body: isEditing ? selectedTask?.body : '',
            }}
            onSubmit={handleSubmit}
        >
            {(formikProps) => (
                <View style={{ marginTop: 32 }}>
                    <TextInput
                        onChangeText={(val) => formikProps.setFieldValue('title', val)}
                        value={formikProps.values.title}
                        style={Styles.input}
                        placeholder={isEditing ? selectedTask?.title : 'Title'}
                        placeholderTextColor={isEditing ? '#5F6077' : '#E8E8EB'}
                    />
                    <TextInput
                        onChangeText={(val) => formikProps.setFieldValue('body', val)}
                        value={formikProps.values.body}
                        style={Styles.input}
                        placeholder={isEditing ? selectedTask?.body : 'Task information'}
                        placeholderTextColor={isEditing ? '#5F6077' : '#E8E8EB'}
                    />
                    <Button
                        buttonText={
                            formikProps.values.title && !isEditing
                                ? 'Add'
                                : isEditing
                                    ? 'Update'
                                    : 'Cancel'
                        }
                        onPress={formikProps.handleSubmit}
                        touchableStyles={Styles.touchable}
                    />
                </View>
            )}
        </Formik>
    );
};

export default AddTodoInput;
