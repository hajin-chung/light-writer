import { Component, createSignal } from "solid-js";

const ThemeTypes = ["light", "dark", "neon"] as const;
type Theme = (typeof ThemeTypes)[number];

export const ThemeToggle: Component = () => {
  const [theme, setTheme] = createSignal<Theme>("light");

  const changeTheme = (nextTheme: Theme) => {
    const htmlElement = document.getElementById("html");
    setTheme((prev) => {
      htmlElement?.classList.remove(prev);
      htmlElement?.classList.add(nextTheme);
      return nextTheme;
    });
  };

	const cycleTheme = () => {
		const idx = ThemeTypes.findIndex((v) => v === theme());
		console.log(idx);
		changeTheme(ThemeTypes[(idx+1) % ThemeTypes.length]);
	}

  return (
    <div class="flex flex-col gap-2">
      <button onClick={() => changeTheme("dark")} class="text-primary">
        change to dark theme
      </button>
      <button onClick={() => changeTheme("light")} class="text-primary">
        change to light theme
      </button>
      <button onClick={() => changeTheme("neon")} class="text-primary">
        change to neon theme
      </button>
      <button onClick={() => cycleTheme()} class="text-primary">
				cycle themes
      </button>
    </div>
  );
};
