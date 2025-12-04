import { Pressable, StyleSheet, Text } from "react-native"

export const FokusButton = () => {
    return (
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Começar</Text>
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
    },
    buttonText: {
      textAlign: "center",
      fontSize: 16,
      color: "#161616",
      fontFamily:"JetBrainsMono_500Medium",
    }
  })