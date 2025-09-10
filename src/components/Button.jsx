import { StyleSheet, View, Text } from "react-native";


export default function Button({label, link})
{

    return (

        <View style={styles.button}>

            <Text style={{color: 'white'}}>
                {label}
            </Text>

        </View>

    )

}

const styles = StyleSheet.create({

    button: {
        width: '100%',
        padding: 15,
        backgroundColor: '#8C52FF',
        alignItems: 'center',
        borderRadius: 7
    }

})