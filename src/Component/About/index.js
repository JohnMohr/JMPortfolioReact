import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div style={{ width: '100%', margin: 'auto' }}>
      <Grid className="landing-grid">
          <Cell col={12}>
              
              <img
                  src="https://avatars2.githubusercontent.com/u/74803311?v=4"
                  alt="avatar"
                  className="avatar-img"
              />
              <div className="banner-text">
                  
                  <h2>So You Want <s>More!?</s> Mohr!</h2>

                  <hr />

                  <div className="biography">
                  <p>My full name is John Nicholas Mohr II, I was named after my grandfather on my Dad's side. We never met but he was a lawyer in Hood River, OR. I was born South West of there, on the coast, in Newport, OR. My family and I moved progressively North throughout my youth and I've landed in Bellingham, WA. With a lot of back-and-forth in-between.
                  </p>
                  <p>
                  I moved to Bellingham for Mt.Baker Ski Area where I worked as a Lifty and a Terrain Park Attendant. I found great appreciation for the surrounding area and people, so when the winter season ended I decided to remain in town.
                  </p>
                  <p> I'm a man of many hats. I've ventured into a diversity of careers looking for what's right for me. From Business Ownership to Ski Areas, Delis to Fine Dining Kitchens, i-502 warehouses and editing video at home I've looked for out-of-the-box and inventive concepts. Coding allows for executing that search at a greater depth which drives me to learn more about the field.</p>
                  <p>I seek to apply the knowledge that I've gained from my time in full-stack bootcamp in ways that reflect my experiences in life. To create applications that ease use in a great array of fields.</p>
                  </div>

          
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/_oxU84g8cC8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
                      <a href="https://www.youtube.com/watch?v=4uaPrB00eEc">
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

export default About;