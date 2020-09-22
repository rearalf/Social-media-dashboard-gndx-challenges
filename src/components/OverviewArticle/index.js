import React, { Fragment } from 'react';
import './styles.styl';
import IconFacebook from '../../img/icon-facebook.svg';
import IconTwitter from '../../img/icon-twitter.svg';
import IconInstagram from '../../img/icon-instagram.svg';
import IconYoutube from '../../img/icon-youtube.svg';
import IconUp from '../../img/icon-up.svg';
import IconDown from '../../img/icon-down.svg';

export const OverviwArticle = () => {
	const Articles = [
		{
			id: 1,
			IconSocial: IconFacebook,
			AltIconSocial: 'Icon Facebook',
			title: 'Page Views',
			Number: 1987,
			UpOrDown: IconUp,
			NewFollowers: '3%',
			State: 'Positive',
		},
		{
			id: 2,
			IconSocial: IconFacebook,
			AltIconSocial: 'Icon Facebook',
			title: 'Likes',
			Number: 52,
			UpOrDown: IconDown,
			NewFollowers: '2%',
			State: 'Negative',
		},
		{
			id: 3,
			IconSocial: IconInstagram,
			AltIconSocial: 'Icon Instagram',
			title: 'Likes',
			Number: 5462,
			UpOrDown: IconUp,
			NewFollowers: '2257%',
			State: 'Positive',
		},
		{
			id: 4,
			IconSocial: IconInstagram,
			AltIconSocial: 'Icon Instagram',
			title: 'Profile Views',
			Number: '52K',
			UpOrDown: IconUp,
			NewFollowers: '1375%',
			State: 'Positive',
		},
		{
			id: 5,
			IconSocial: IconTwitter,
			AltIconSocial: 'Icon Twitter',
			title: 'Retweets',
			Number: 117,
			UpOrDown: IconUp,
			NewFollowers: '303%',
			State: 'Positive',
		},
		{
			id: 6,
			IconSocial: IconTwitter,
			AltIconSocial: 'Icon Twitter',
			title: 'Likes',
			Number: 507,
			UpOrDown: IconUp,
			NewFollowers: '553%',
			State: 'Positive',
		},
		{
			id: 7,
			IconSocial: IconYoutube,
			AltIconSocial: 'Icon Youtube',
			title: 'Likes',
			Number: 107,
			UpOrDown: IconDown,
			NewFollowers: '19%',
			State: 'Negative',
		},
		{
			id: 8,
			IconSocial: IconYoutube,
			AltIconSocial: 'Icon Youtube',
			title: 'Total Views',
			Number: 1407,
			UpOrDown: IconDown,
			NewFollowers: '12%',
			State: 'Negative',
		},
	];

	const RenderArticle = article => (
		<article className="CardSmall" key={article.id}>
			<div className="CardSmallHead">
				<p className="CardSmallTitle"> {article.title} </p>
				<img src={article.IconSocial} alt={article.AltIconSocial} />
			</div>
			<div className="CardSmallContent">
				<p className="CardSmallNumber">{article.Number} </p>
				<p className={`CardSmallNumberPorcent ${article.State}`}>
					<img src={article.UpOrDown} alt="Up Or Down" />
					{article.NewFollowers}
				</p>
			</div>
		</article>
	);
	return <Fragment>{Articles.map(article => RenderArticle(article))}</Fragment>;
};
