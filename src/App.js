import React from 'react';
import GlobalStyles from './styles/global';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import { ThemeContext, ThemeProvider } from './store/Theme';

import Kanban from './components/Kanban';

function App() {
	return (
		<ThemeProvider>
			<ThemeContext.Consumer>
				{({ theme }) => (
					<StyledComponentsThemeProvider theme={theme}>
						<GlobalStyles />
						<Kanban />
					</StyledComponentsThemeProvider>
				)}
			</ThemeContext.Consumer>
		</ThemeProvider>
	);
}

export default App;
