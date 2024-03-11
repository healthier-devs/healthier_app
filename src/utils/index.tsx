import { Dimensions, PixelRatio } from "react-native";

export function convertToRelativeSize(
  dimension: { width: number; height: number } = Dimensions.get("window"),
  REFERENCE_WIDTH = 390,
) {
  const cache = new Map<number, number>();

  return (size: number) => {
    const validatedSize = typeof size === "number" ? size : 0;

    if (cache.has(validatedSize)) {
      return cache.get(validatedSize) as number;
    }

    const result = PixelRatio.roundToNearestPixel(
      (validatedSize * dimension.width) / REFERENCE_WIDTH,
    );
    cache.set(validatedSize, Math.trunc(result));

    return result;
  };
}
