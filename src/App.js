import React from 'react';
import GlobalStyles from './styles/global';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { ThemeContext, ThemeProvider } from './store/Theme';

import Kanban from './components/Kanban';

function App() {
	return (
		<DndProvider backend={HTML5Backend }>
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
		</DndProvider>
	);
}

export default App;
