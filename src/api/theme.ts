import { useEffect, useState } from "react";

export type ThemeMode = 'light' | 'dark';

function setCSSVariables(mode: ThemeMode) {
	const root = document.documentElement;
	if (mode === 'dark') {
		root.style.setProperty('--background', '#0a0a0a');
		root.style.setProperty('--foreground', '#ededed');
	} else {
		root.style.setProperty('--background', '#ffffff');
		root.style.setProperty('--foreground', '#171717');
	}
}

export function useTheme(): [ThemeMode, () => void] {
	const [theme, setTheme] = useState<ThemeMode>(() => {
		if (typeof window !== 'undefined') {
			return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
		}
		return 'light';
	});

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setCSSVariables(theme);
			localStorage.setItem('theme', theme);
		}
	}, [theme]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const storedTheme = localStorage.getItem('theme');
			if (storedTheme === 'dark' || storedTheme === 'light') {
				setCSSVariables(storedTheme as ThemeMode);
				setTheme(storedTheme as ThemeMode);
			} else {
				const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
				setCSSVariables(prefersDark ? 'dark' : 'light');
				setTheme(prefersDark ? 'dark' : 'light');
			}
		}
	}, []);

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};

	return [theme, toggleTheme];
}
