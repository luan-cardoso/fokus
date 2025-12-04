import { StyleSheet } from "react-native"
import { FokusText } from "../FokusText"

export const Timer = ({ totalSeconds }) => {

    const date = new Date(totalSeconds * 1000)
    const options = {minute: '2-digit', second: '2-digit'}

    return (
        <FokusText style={styles.timer}>
            {date.toLocaleTimeString('pt-BR', options)}
        </FokusText>
    )
}

const styles = StyleSheet.create({
    timer: {
      color: "#d2d2d2",
      fontSize: 48,
      fontWeight: "bold",
      textAlign: "center",
    },
  })