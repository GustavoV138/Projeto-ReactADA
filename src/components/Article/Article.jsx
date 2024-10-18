import React from 'react';

import articleImg from '../../assets/images/logo.avif';

import './styles.css';


export class Article extends React.Component {

    render() {
        return (
            <article id="article">
                <img src={articleImg} alt="" width="200px"/>

                <div className="article-infos">
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.subtitle}</h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iste tempora, culpa ipsa cum voluptatem a vitae quod sunt. Officia amet dolor voluptate nam, magnam assumenda inventore nemo sapiente provident.
                    </p>
                </div>
            </article>
        )
    }
}
