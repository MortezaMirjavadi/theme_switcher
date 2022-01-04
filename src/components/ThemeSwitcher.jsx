import React from "react";
import { THEME_TYPE } from "../constants";
import { ThemeContext } from "../providers/ThemeProvider";

const ThemeSwitcher = () => {
  // No need to change *return* part
  // You have to set themeMode based on context
  const themeMode = React.useContext(ThemeContext);
  
  const handleThemeChange = (e) => {
    if (themeMode.themeMode === THEME_TYPE.DARK) {
      themeMode.setThemeMode(THEME_TYPE.LIGHT);
    } else {
      themeMode.setThemeMode(THEME_TYPE.DARK);
    }
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          data-testid="theme-changer"
          type="checkbox"
          checked={themeMode.themeMode === THEME_TYPE.DARK}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
      <span className="text-color bold">Dark mode</span>
    </div>
  );
};

export default ThemeSwitcher;
