import React, { Fragment } from 'react';
import './styles.styl';
import { IconFacebook } from '../Icons/IconFacebook';
import { IconTwitter } from '../Icons/IconTwitter';
import { IconInstagram } from '../Icons/IconInstagram';
import { IconYoutube } from '../Icons/IconYoutube';
import { IconUp } from '../Icons/IconUp';
import { IconDown } from '../Icons/IconDown';
import { ArticlePrimaryData } from '../../Data';

export const ArticlePrimary = () => {
    const RenderActicle = article => {
        return (
            <article className={`CardPrimary ${article.ClassSocial}`} key={article.id}>
                <div className="CardHead">
                    {article.IconSocial === 'IconYoutube' && <IconYoutube />}
                    {article.IconSocial === 'IconInstagram' && <IconInstagram />}
                    {article.IconSocial === 'IconTwitter' && <IconTwitter />}
                    {article.IconSocial === 'IconFacebook' && <IconFacebook />}
                    <p>{article.Name} </p>
                </div>
                <div className="CardBody">
                    <p className="Number">{article.Number} </p>
                    <p className="Followers">Followers</p>
                </div>
                <div className="Footer">
                    {article.UpOrDown ? <IconUp /> : <IconDown />}
                    <span className={`NewFollowers ${article.State}`}>
                        {article.NewFollowers} Today
                    </span>
                </div>
            </article>
        );
    };

    return <Fragment>{ArticlePrimaryData.map(article => RenderActicle(article))}</Fragment>;
};
