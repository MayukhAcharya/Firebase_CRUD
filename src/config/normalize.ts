import { PixelRatio, Dimensions, Platform } from "react-native";

export const { height, width } = Dimensions.get("window");
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("screen");

// figma design scale
const wscale: number = SCREEN_WIDTH / 1366;
const hscale: number = SCREEN_HEIGHT / 840;

function normalize(size: number, based: "width" | "height" = "width") {
  const newSize = based === "height" ? size * hscale : size * wscale;

  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    if (SCREEN_WIDTH < 1370) {
      return size;
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
  }
}

export default normalize;
