import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetThemeColor } from "Redux/Theme/action";
import { lightTheme, darkTheme } from "theme";
import { getCookie } from "Utils/StorageVariables";
export const useThemeMode = () => {
    const dispatch = useDispatch();
    let themeCookie = JSON.parse(getCookie("isThemeLight"));
    const { isThemeLight } = useSelector((state) => state.themeColorReducer);
    const [theme, setTheme] = useState(isThemeLight ? lightTheme : darkTheme);

    useEffect(() => {
        if (themeCookie != null) {
            dispatch(SetThemeColor(themeCookie));
            if (themeCookie) return setTheme(lightTheme);
            return setTheme(darkTheme);
        }
        if (isThemeLight) return setTheme(lightTheme);
        return setTheme(darkTheme);
    }, [isThemeLight, themeCookie]);

    return { theme };
};