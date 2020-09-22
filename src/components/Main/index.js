import React from 'react';
import './styles.styl';
import { ArticlePrimary } from '../ArticlePrimary/index';
import { OverviwArticle } from '../OverviewArticle/index';

export const Main = () => {
	return (
		<main className="Wrapper">
			<div className="HeaderCard">
				<ArticlePrimary />
			</div>
			<div className="BodyOverview">
				<h2>Overview - Today</h2>
				<div className="BodyCard">
					<OverviwArticle />
				</div>
			</div>
		</main>
	);
};
