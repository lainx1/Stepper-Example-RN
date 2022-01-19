import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Button from "../components/button/button";

const Main = (props) => {

    const [content, setContent] = useState({
        text: "Texto de la seccion 1",
        image: "Imagen de la seccion 1",
        showButton: false
    })


    const step1 = () => {
        setContent({
            text: "Texto de la seccion 1",
            image: "Imagen de la seccion 1",
            showButton: false
        })
    }

    const step2 = () => {
        setContent({
            text: "Texto de la seccion 2",
            image: "Imagen de la seccion 2",
            showButton: false
        })
    }

    const step3 = () => {
        setContent({
            text: "Texto de la seccion 3",
            image: "Imagen de la seccion 3",
            showButton: true
        })
    }


    return <View style={{ justifyContent: "center", alignItems: "center", padding: "20", width: "100%", height: "100%", flexDirection: "column" }}>

        <View style={{
            width: "100%",
            height: "40%",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text>{content.image}</Text>
        </View>


        <View style={{
            width: "100%",
            height: "40%",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text>{content.text}</Text>
        </View>

        <View style={{
            width: "100%",
            height: "20%",
            justifyContent: "center",
            alignItems: "center"
        }}>
            {
                content.showButton === false ?
                    <View style={{
                        width: "100%",
                        justifyContent: "space-around",
                        alignItems: "center",
                        flexDirection: "row"
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: "aquamarine",
                            padding: 20
                        }} onPress={step1}>
                            <Text>Paso 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: "aquamarine",
                            padding: 20
                        }} onPress={step2}>
                            <Text>Paso 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: "aquamarine",
                            padding: 20
                        }} onPress={step3}>
                            <Text>Paso 3</Text>
                        </TouchableOpacity>

                    </View>
                    : <Text>Este es el boton</Text>
            }

        </View>

    </View>


}
export default Main