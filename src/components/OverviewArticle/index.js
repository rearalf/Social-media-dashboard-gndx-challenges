import React, { Fragment } from 'react';
import './styles.styl';
import { IconFacebook } from '../Icons/IconFacebook';
import { IconTwitter } from '../Icons/IconTwitter';
import { IconInstagram } from '../Icons/IconInstagram';
import { IconYoutube } from '../Icons/IconYoutube';
import { IconUp } from '../Icons/IconUp';
import { IconDown } from '../Icons/IconDown';
import { OverviewArticleData } from '../../Data';

export const OverviwArticle = () => {
    const RenderArticle = article => (
        <article className="CardSmall" key={article.id}>
            <div className="CardSmallHead">
                <p className="CardSmallTitle"> {article.title} </p>
                {article.IconSocial === 'IconYoutube' && <IconYoutube />}
                {article.IconSocial === 'IconInstagram' && <IconInstagram />}
                {article.IconSocial === 'IconTwitter' && <IconTwitter />}
                {article.IconSocial === 'IconFacebook' && <IconFacebook />}
            </div>
            <div className="CardSmallContent">
                <p className="CardSmallNumber">{article.Number} </p>
                <p className={`CardSmallNumberPorcent ${article.State}`}>
                    {article.UpOrDown ? <IconUp /> : <IconDown />}
                    {article.NewFollowers}
                </p>
            </div>
        </article>
    );

    return <Fragment>{OverviewArticleData.map(article => RenderArticle(article))}</Fragment>;
};
