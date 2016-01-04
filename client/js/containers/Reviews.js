import React, {Component, PropTypes} from 'react'

class Reviews extends Component {
    render() {
        return (
            <div>
                <div id="header-featured-reviews"></div>
                <div id="banner-wrapper">
                    <div id="banner" className="container">
                        <h2>Здесь у нас немного отзывов о нашем сервисе</h2>
                        <span>Вы можете читать или оставлять отзывы о нашем сервисе</span>
                    </div>
                </div>

                <div id="wrapper">
                    <div id="page">
                        <div id="content" className="-left-margined">
                            <p>Когда будут сделаны первые отзывы о нашем сервисе здесь вы сможете их увидеть<br />
                              или оставить свой отзыв, который честно будет описывать нашу систему.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reviews
