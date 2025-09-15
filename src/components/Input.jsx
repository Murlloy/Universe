import { StyleSheet, TextInput } from "react-native"
import { View, Text, Image } from "react-native"


export default function input({label, password}){
    return (
        <View style={styles.inputContainer}>
                <Text style={{color:"rgba(196, 196, 196, 0.75)"}}>{label}</Text>
                <TextInput style={styles.input} />
                {
                        password ? (
                            <Image source={require('../assets/invisible-icon.png')} width={30} height={30} style={{
                                position: "absolute",
                                right: 15,
                                top: 40
                            }}/> 
                        )
                            : (
                                <Image source={require('../assets/invisible-icon.png')} style={{opacity: 0}} />
                            )


                    }
            
        </View>
    )
}

const styles = StyleSheet.create({

    inputContainer: {
        gap: 6,
        width: '100%'
    }
    ,

    input: {    
        width: '100%',
        height: 50,
        borderRadius: 7,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderColor: 'rgb(162, 162, 162)',
        borderWidth: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 15,
        color: 'white',
        paddingLeft: 15
    }


})