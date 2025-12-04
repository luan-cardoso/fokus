import { Text } from "react-native";

export const FokusText = ({ style, ...props }) => {
  return (
    <Text 
      style={[{ fontFamily: "JetBrainsMono_500Medium" }, style]} 
      {...props} 
    />
  );
};
