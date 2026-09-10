export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button 
        type="button"
        className="theme-toggle" 
        aria-label={theme === "light" ? "Switch to Dark" : "Switch to Light"}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <img
        src={theme === "light" ? "assets/moon.svg" : "assets/sun.svg"}
        alt={theme === "light" ? "Switch to Dark" : "Switch to Light"}
        className="theme-icon"
      />
    </button>
  );
}