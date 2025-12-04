import { useFonts } from "expo-font";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { FokusButton } from "../components/FokusButton";
import { Timer } from "../components/Timer";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25,
    display: 'Foco'    
  },
  {
    id: 'short',
    initialValue: 5,
    display: 'Pausa Curta'
  },
  {
    id: 'long',
    initialValue: 15,
    display: 'Pausa Longa'
  }
]

export default function Index() {
  // Carrega a fonte personalizada
  const [fontsLoaded] = useFonts({
    JetBrainsMono_500Medium: require("../assets/fonts/JetBrainsMono-Medium.ttf"),
  });

  // Aplica a fonte globalmente quando carregada
  if (fontsLoaded && !Text.defaultProps?.style?.fontFamily) {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.style = { fontFamily: "JetBrainsMono_500Medium" };
  }

  const [timerType, setTimerType] = useState(pomodoro[0])

  // Aguarda o carregamento da fonte antes de renderizar
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton 
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => setTimerType(p)}
              display={p.display}
            />
          ))}
        </View> 
        <Timer totalSeconds={timerType.initialValue}/>
        <FokusButton/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#161616",
    letterSpacing: 2,
  },
  actions: {
    borderWidth: 1,
    borderColor: "#d2d2d215",
    padding: 24,
    borderRadius: 6,
    width: "70%",
    gap: 32,
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
})