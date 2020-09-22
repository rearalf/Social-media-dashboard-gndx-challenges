import React, { Fragment } from 'react';
import './styles.styl';
import IconFacebook from '../../img/icon-facebook.svg';
import IconTwitter from '../../img/icon-twitter.svg';
import IconInstagram from '../../img/icon-instagram.svg';
import IconYoutube from '../../img/icon-youtube.svg';
import IconUp from '../../img/icon-up.svg';
import IconDown from '../../img/icon-down.svg';

export const ArticlePrimary = () => {
	const Articles = [
		{
			id: 1,
			IconSocial: IconFacebook,
			AltIconSocial: 'Icon Facebook',
			ClassSocial: 'Facebook',
			Name: '@nathanf',
			Number: 1987,
			UpOrDown: IconUp,
			NewFollowers: 12,
			State: 'Positive',
		},
		{
			id: 2,
			IconSocial: IconTwitter,
			AltIconSocial: 'Icon Twitter',
			ClassSocial: 'Twitter',
			Name: '@nathanf',
			Number: 1044,
			UpOrDown: IconUp,
			NewFollowers: 99,
			State: 'Positive',
		},
		{
			id: 3,
			IconSocial: IconInstagram,
			AltIconSocial: 'Icon Instagram',
			ClassSocial: 'Instagram',
			Name: '@realnathanf',
			Number: '11k',
			UpOrDown: IconUp,
			NewFollowers: 1099,
			State: 'Positive',
		},
		{
			id: 4,
			IconSocial: IconYoutube,
			AltIconSocial: 'Icon Youtube',
			ClassSocial: 'Youtube',
			Name: 'Nathan F.',
			Number: 8239,
			UpOrDown: IconDown,
			NewFollowers: 144,
			State: 'Negative',
		},
	];

	const RenderActicle = article => {
		return (
			<article className={`CardPrimary ${article.ClassSocial}`} key={article.id}>
				<div className="CardHead">
					<img src={article.IconSocial} alt={article.AltIconSocial} />
					<p>{article.Name} </p>
				</div>
				<div className="CardBody">
					<p className="Number">{article.Number} </p>
					<p className="Followers">Followers</p>
				</div>
				<div className="Footer">
					<img src={article.UpOrDown} alt="Up Or Down" />
					<span className={`NewFollowers ${article.State}`}>{article.NewFollowers} Today</span>
				</div>
			</article>
		);
	};

	return <Fragment>{Articles.map(article => RenderActicle(article))}</Fragment>;
};
