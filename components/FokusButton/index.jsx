import { Pressable, StyleSheet } from "react-native"
import { FokusText } from "../FokusText"

export const FokusButton = ({ onPress, title, icon }) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            {icon}
            <FokusText style={styles.buttonText}>{title}</FokusText>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: "#d2d2d2",
      padding: 12,
      borderRadius: 6,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: 'row',
      gap: 12,
    },
    buttonText: {
      textAlign: "center",
      fontSize: 16,
      color: "#161616",
    }
  })