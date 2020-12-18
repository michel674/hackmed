import "styled-components";
import { BrandColor } from "../../components/constants";

declare module "styed-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      Primary: BrandColor;
      Secondary: BrandColor;
      Tertiary: BrandColor;

      White: string;

      HighContrast: string;
      LowContrast: string;

      LayoutTertiary: string;
      LayoutSecondary: string;
      LayoutPrimary: string;

      Transparent: string;

      Alert: string;
      Warning: string;
      Success: string;
    };
  }
}
