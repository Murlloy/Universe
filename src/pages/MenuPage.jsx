import { View, StyleSheet, StatusBar, Image} from "react-native";
import Navbar from "../components/NavBar";
import MiniCard from "../components/MiniCard";
import BigCard from "../components/BigCard";

export default function MenuPage() {

    return (

        <View style={styles.body}>
            <StatusBar hidden/>

            <Image source={require("../assets/logo-universe.png")} style={{marginLeft: -25,}}/>

            <View style={styles.menuMain}>

                <MiniCard quantidade={"12"}/>
 
                <BigCard />

            </View>

            <Navbar/>

        </View>

    )

}

const styles = StyleSheet.create ({

    body: {
        backgroundColor: '#090909',
        flex: 1,
        width: "100%",
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 100,
        paddingBottom: 400,
        gap: 110
    },

    menuMain: {
        width: "80%",
        height: "100%",
        gap: 25
    }

    })