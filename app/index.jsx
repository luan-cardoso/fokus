import { useFonts } from "expo-font";
import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { FokusButton } from "../components/FokusButton";
import { IconPause, IconPlay } from "../components/Icons";
import { Timer } from "../components/Timer";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25 * 60,
    display: 'Foco'    
  },
  {
    id: 'short',
    initialValue: 5 * 60,
    display: 'Pausa Curta'
  },
  {
    id: 'long',
    initialValue: 15 * 60,
    display: 'Pausa Longa'
  }
]

export default function Index() {
  const [fontsLoaded] = useFonts({
    JetBrainsMono_500Medium: require("../assets/fonts/JetBrainsMono-Medium.ttf"),
  });

  const [timerType, setTimerType] = useState(pomodoro[0])

  const [timerRunning, setTimerRunning] = useState(false)

  const [seconds, setSeconds] = useState(pomodoro[0].initialValue)

  const timerRef = useRef(null)

  if (!fontsLoaded) {
    return null;
  }

  const clear = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current)
      timerRef.current = null
      setTimerRunning(false)
    }
  }

  const toggleTimerType = (newTimerType) => {
    setTimerType(newTimerType)
    setSeconds(newTimerType.initialValue)
    clear()
  }

  const toggleTimer = () => {
    if (timerRef.current) {
      clear()
      return
    }

    setTimerRunning(true)

    const id = setInterval(() => {
      setSeconds(oldState => {
        if (oldState === 0) {
          clear()
          return timerType.initialValue
        }
        return oldState - 1
      })
    }, 1000)
    timerRef.current = id
  }

  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton 
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => toggleTimerType(p)}
              display={p.display}
            />
          ))}
        </View> 
        <Timer totalSeconds={seconds}/>
        <FokusButton 
          onPress={toggleTimer}
          title={timerRunning ? 'Pausar' : 'Começar'}
          icon={timerRunning ? <IconPause/> : <IconPlay/>}
        />
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