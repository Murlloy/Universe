import { StyleSheet, View, Text } from "react-native";


export default function MiniCard({quantidade}) {

    return (

        <View style={styles.card}>
            <Text style={styles.title}>{quantidade}</Text>
            <Text style={{color: "white", alignSelf: "flex-end", marginBottom: 10}}>Veiculos Ativos</Text>

            <View style={styles.flutuante}>
                <Text style={{color: "white",}}>2 Vip Universe</Text>
            </View>
        </View>

    )

}

const styles = StyleSheet.create({

    card: {
        backgroundColor: "rgba(255, 255, 255, 0.09)",
        borderRadius: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "end",
        paddingBottom: 10,
        paddingTop: 15,
        paddingLeft: 20,
        paddingRight: 20,
        width: "100%",
        height: 76,
        gap: 20,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.09)"
    },

    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: "white"
    },

    flutuante: {
        backgroundColor: "rgba(139, 44, 245, 0.28)"
    }

})