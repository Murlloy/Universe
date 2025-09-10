import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

export default function Navbar() {

    return (

        <View style={styles.navBar}>

            <TouchableOpacity>
                <Image source={require("../assets/Home.png")} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require("../assets/Home.png")} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require("../assets/Home.png")} />
            </TouchableOpacity>

        </View>

    )

}

const styles = StyleSheet.create({

    navBar: {
        width: "100%",
        flex: 1,
        height: 100,
        justifyContent: "space-between",
        paddingLeft: 40,
        paddingRight: 40,
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        backgroundColor: "#161616",
        borderRadius: "40px",
    }

})