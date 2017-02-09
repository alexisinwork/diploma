import React, {Component, PropTypes} from 'react'

class Reviews extends Component {
    render() {
        return (
            <div>
                <div id="header-featured-reviews"></div>
                <div id="banner-wrapper">
                    <div id="banner" className="container">
                        <h2>Reviews</h2>
                        <span>You can read about this system some reviews</span>
                    </div>
                </div>

                <div id="wrapper">
                    <div id="page">
                        <div id="content" className="-left-margined">
                            <p>When there will be available some reviews - we will show them here</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reviews
