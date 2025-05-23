import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function getScreenDimensions() {
  return {
    screenWidth: windowWidth,
    screenHeight: windowHeight,
  };
}