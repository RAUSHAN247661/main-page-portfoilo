import React from "react";
import { useTheme } from "@heroui/use-theme";
import { Switch, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  
  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };
  
  return (
    <Tooltip 
      content={`Switch to ${isDark ? "light" : "dark"} mode`}
      placement="bottom"
    >
      <div className="flex items-center gap-2">
        <Icon 
          icon={isDark ? "lucide:moon" : "lucide:sun"} 
          className={`text-lg ${isDark ? "text-primary" : "text-foreground-500"}`}
        />
        <Switch 
          isSelected={isDark}
          onValueChange={handleToggle}
          size="sm"
          color="primary"
        />
      </div>
    </Tooltip>
  );
};

export default ThemeSwitcher;