import React from "react"
import TouchableOpacityStyled from "./button_styled"
import { Text } from "react-native"

const Button = (props) => {

    const { title, onPress=() => { console.log("Hola") } } = props

    return <TouchableOpacityStyled onPress={() => console.log("Aleluya")}>
        <Text style={{color: "white"}}>{title}</Text>
    </TouchableOpacityStyled>

}

export default Button