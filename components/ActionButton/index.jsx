import { Pressable, StyleSheet } from "react-native"
import { FokusText } from "../FokusText"

export const ActionButton = ({ active, onPress, display }) => {
    return (
        <Pressable
            style={active ? styles.contextButtonActive : null}
            onPress={onPress}
        >
            <FokusText style={[styles.contextButtonText, active && { color: "#161616" }]}>
                {display}
            </FokusText>
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
    },
  })