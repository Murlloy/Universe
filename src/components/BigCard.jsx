import { View, StyleSheet, Image, Text } from "react-native";


export default function BigCard() {

    return (

        <View style={styles.card}>
            <View style={styles.header}>
                <Image source={require("../assets/car.png")} />
                <Text style={{color: "rgba(255, 255, 255, 0.66)", fontSize: 20}}>Tabela de Preços</Text>
            </View>
            <View style={styles.main}>
                <View style={styles.mainContainer}>
                    <Text style={{color: "rgba(255, 255, 255, 0.66)", fontSize: 20}}>1 Hora</Text>
                        <View style={styles.cardDentro}>
                            <View style={{flexDirection: "row", gap: 15}}>
                                <Image source={require("../assets/Motorcycle.png")}/>
                                <Image source={require("../assets/car.png")}/>
                            </View>
                            <Text style={{color: "white", fontSize: 16}}>R$25</Text>
                        </View>
                        <View style={styles.cardDentro}>
                            <View>
                                <Image source={require("../assets/Sci-Fi.png")}/>
                            </View>
                            <Text style={{color: "white", fontSize: 16}}>R$25</Text>
                        </View>
                </View>
                <View style={styles.mainContainer}>
                        <Text style={{color: "rgba(255, 255, 255, 0.66)", fontSize: 20}}>Demais Horas</Text>
                        <View style={styles.cardDentro}>
                            <View style={{flexDirection: "row", gap: 15}}>
                                <Image source={require("../assets/Motorcycle.png")}/>
                                <Image source={require("../assets/car.png")}/>
                            </View>x
                            <Text style={{color: "white", fontSize: 16}}>R$25</Text>
                        </View>
                </View>
            </View>
            </View>

    )

}

const styles = StyleSheet.create({

    card: {
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.09)",
        display: 'flex',
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.09)",
        borderRadius: 7,
        padding: 15,
        justifyContent: "space-between"
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    cardDentro: {
        backgroundColor: "#202020",
        borderColor: "rgba(255, 255, 255, 0.05)",
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        gap: 25,
        padding: 10,
        alignItems: 'center',
        width: "100%",
        borderRadius: 8
    },

    main: {
        gap: 20,
    }

    , mainContainer: {
        gap: 15
    }
})