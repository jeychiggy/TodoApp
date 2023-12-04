import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '90%',
        maxHeight: 200,
        justifyContent: 'space-between',
        backgroundColor:'#FFF',
        alignSelf: 'center',
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: '#E8E8EB',
        marginVertical: 16,
        flex: 1
    },
    textSection: {
        marginTop: 16,
        marginLeft: 8,
        width: '50%'
    },
    title: {
        color: '#5F6077',
        fontWeight: 'bold'
    },
    body: {
        color: '#A4A4B1',
        marginBottom: 16,
        marginTop: 4
    },
    icons: {
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'space-evenly',
        width: '35%'
    }
})
