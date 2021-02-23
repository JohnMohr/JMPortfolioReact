import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        
                        <img
                            src="https://avatars2.githubusercontent.com/u/74803311?v=4"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full-ish Stack Web Developer</h1>

                            <hr />
                            <p>HTML/CSS | Bootstrap | Javascript | Handlebars | React | NodeJS | Sequelize | Express | MongoDB</p>

                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/john-mohr-42629aa4/">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                <a href="https://github.com/JohnMohr">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>
                                <a href="https://www.youtube.com/watch?v=ZmSORFI2XzU">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>

                            </div>


                        </div>

                    </Cell>
                </Grid>
            </div>

        )
    }
}

export default Landing;