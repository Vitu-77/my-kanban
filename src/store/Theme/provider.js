import React, { useState } from 'react';
import ThemeContext from './context';

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState({
		mainColor: '#673ab7'
	});

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
