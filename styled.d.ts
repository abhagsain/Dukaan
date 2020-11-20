// import original module declarations
import "styled-components";
import { ITheme } from "./theme";

interface My {
  font: string;
}
declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
