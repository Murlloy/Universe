import { View, StyleSheet, Image, StatusBar} from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Register() {

    return (
        <View style={styles.body}>

            <StatusBar hidden/>

             <Image source={require('../assets/back-icon.png')} style={{
                position: "absolute",
                top: 50,
                left: 20,
                width: 30,
                height: 30

            }}/>

            <Image source={require('../assets/logo-universe.png')} width={50} height={50} 
                        style={{
                            alignSelf: 'flex-start',
                            marginLeft: -15
            
            }}/>

             <View style={styles.inputWrapper}>
            
                <Input label="Nome"/>
                <Input label="Email"/>
                <Input label="Password" password="true"/>
            
            </View>

            <Button label="Cadastrar"></Button>

            <Image source={require('../assets/login-effect.png')} style={{
                position: 'absolute',
                bottom: 0
            }}></Image>
            
        </View>
    )

}

const styles = StyleSheet.create({

    body: {
        backgroundColor: 'black',
        flex: 1,
        width: "100%",
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 120,
        paddingBottom: 400,
        paddingLeft: 50,
        paddingRight: 50,
        gap: 60
    },

    inputWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        width: '100%'
    },

})