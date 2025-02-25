interface Theme {
  mode: string;
  background: string;
  primary: string;
  secondary: string;
  text: string;
  success: string;
  warning: string;
  buttonText:string
}

export const theme: Theme[] = [{
  mode: "light",
  background: "#FFFFFF",
  primary: "#3674B5",
  secondary: "#578FCA",
  text: "#000000",
  success: "#5cb85c",
  warning: "#c93c08",
  buttonText:"#ffffff"
}];
  