import { Pressable, StyleSheet, Text } from "react-native"

export const ActionButton = ({ active, onPress, display }) => {
    return (
        <Pressable
            style={active ? styles.contextButtonActive : null}
            onPress={onPress}
        >
            <Text style={[styles.contextButtonText, active && { color: "#161616" }]}>
                {display}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    contextButtonActive: {
      backgroundColor: "#d2d2d2",
      borderRadius: 6,
    },
    contextButtonText : {
      fontSize: 12,
      color: "#d2d2d2",
      padding: 8,
      fontFamily:"JetBrainsMono_500Medium",
    },
  })