import {StyleSheet} from "react-native";

export default StyleSheet.create({
    overlay: {
    height: '100%',
    backgroundColor: '#00000090'
},

modalContent: {
    height: 400,
    marginTop: 200,
    backgroundColor: 'white',
    marginHorizontal: 24,
    borderRadius: 8,
    borderColor: '#B8836E',
    borderWidth: 1,
    alignItems:'center'
},

close: {
    position: 'absolute',
    left: 10,
    top: 10
},
    LOGO: {
    width: 160,
    height: 34,
    alignSelf: 'center',
    marginTop: 32
},

 caption: {
    textAlign: 'center',
    marginTop: 60,
    padding: 32
},

 buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 80
}
})
