import React, { useContext } from 'react';
import { StyledHeader } from './styles';

import { ThemeContext } from '../../store/Theme';

const Header = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<StyledHeader>
			<h1>My Kanban</h1>
			<input
				value={theme.mainColor}
				onChange={(e) => setTheme({ mainColor: e.target.value })}
			/>
		</StyledHeader>
	);
};

export default Header;
