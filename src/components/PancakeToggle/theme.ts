import { darkColors, lightColors } from "../../theme/colors";
import { PancakeToggleTheme } from "./types";

export const light: PancakeToggleTheme = {
  handleBackground: lightColors.invertedContrast,
  handleShadow: "transparent",
};

export const dark: PancakeToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
