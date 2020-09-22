import React, { Fragment } from 'react';
import './styles.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

const App = () => {
	return (
		<Fragment>
			<Header />
			<Main />
		</Fragment>
	);
};

export default App;
