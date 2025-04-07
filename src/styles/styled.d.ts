import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'light' | 'dark';
    background: string;
    text: string;
    primary: string;
    secondary: string;
    accent: string;
    particle: string;
    shadow: string;
  }
} 