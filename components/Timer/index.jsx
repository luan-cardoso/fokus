import { StyleSheet, Text } from "react-native"

export const Timer = ({ totalSeconds }) => {

    const date = new Date(totalSeconds * 1000)
    const options = {minute: '2-digit', second: '2-digit'}

    return (
        <Text style={styles.timer}>
            {date.toLocaleTimeString('pt-BR', options)}
        </Text>
    )
}

const styles = StyleSheet.create({
    timer: {
      color: "#d2d2d2",
      fontSize: 48,
      fontWeight: "bold",
      fontFamily:"JetBrainsMono_500Medium",
      textAlign: "center",
    },
  })