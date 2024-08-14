import { createContext , useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darktheme: () =>{},
    lighttheme: () =>{},
})

export const ThemeProvider = ThemeContext.Provider // exporting provider


// exporting an custom hook 
export default function useTheme() {
    return useContext(ThemeContext)
}