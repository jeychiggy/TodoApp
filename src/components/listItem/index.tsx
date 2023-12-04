import React, {useState, useCallback, memo} from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';

const ListItem = ({ title, body, isComplete, onPressDelete, onPressComplete, onPressEdit }) => {
    const [isItemComplete, setIsItemComplete] = useState(isComplete);

    const handlePressComplete = useCallback(() => {
        setIsItemComplete((prevIsComplete) => !prevIsComplete);
        onPressComplete();
    }, [onPressComplete]);

    const handlePressEdit = useCallback(() => {
        onPressEdit();
    }, [onPressEdit]);

    const handlePressDelete = useCallback(() => {
        onPressDelete();
    }, [onPressDelete]);

    return (
        <View style={Styles.container}>
            <View style={Styles.textSection}>
                <Text style={Styles.title}>{title}</Text>
                <Text numberOfLines={2} ellipsizeMode="tail" style={Styles.body}>
                    {body}
                </Text>
            </View>
            <View style={Styles.icons}>
                <Ionicons
                    name={isItemComplete ? 'checkmark-circle-outline' : 'square-outline'}
                    size={18}
                    onPress={handlePressComplete}
                    color={isItemComplete ? 'green' : '#FCC02B'}
                />
                <Ionicons name="create-outline" size={18} onPress={handlePressEdit} />
                <Ionicons name="trash-outline" size={18} onPress={handlePressDelete} color="#ED596B" />
            </View>
        </View>
    );
};

export default memo(ListItem);
