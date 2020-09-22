import React, { useState } from 'react';
import './styles.styl';

export const Header = () => {
	const [ checked, setChecked ] = useState(true);

	window.addEventListener('load', () => {
		const body = document.querySelector('body');
		body.classList.add('is-dark-mode');
	});

	const ToggleTheme = () => {
		if (checked) {
			document.body.classList.remove('is-dark-mode');
			document.body.classList.add('is-light-mode');
			setChecked(false);
		}
		else {
			document.body.classList.remove('is-light-mode');
			document.body.classList.add('is-dark-mode');
			setChecked(true);
		}
	};

	return (
		<header className="header">
			<div className="Wrapper">
				<div className="header_content">
					<div className="header_text_content">
						<h1 className="head_title">Social Media Dashboard</h1>
						<p className="head_subtitle">Total Followers: 23,004</p>
					</div>

					<div className="change_color">
						<p>Dark Mode</p>
						<input
							type="checkbox"
							name="checkbox"
							id="checkbox"
							onClick={ToggleTheme}
							aria-label="Theme"
							className="checkbox"
							defaultChecked={checked}
						/>
						<label className="switch" htmlFor="checkbox" />
					</div>
				</div>
			</div>
		</header>
	);
};
