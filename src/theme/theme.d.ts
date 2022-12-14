import "@emotion/react";
import { AppTheme } from ".";

declare module "@emotion/react" {
  export interface Theme extends AppTheme {}
}
