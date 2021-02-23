import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from '../Education';
import Experience from '../Experience';
import Skills from '../Skills';


class Resume extends Component {
  render() {
    return(
        <Grid className="main-grid">
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://avatars2.githubusercontent.com/u/74803311?v=4"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>John Mohr</h2>
            <h4 style={{color: 'grey'}}>Existential Scout</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Former Chef/Current Student</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1200 N. Garden St. #4, Bellingham, WA. 98225</p>
            <h5>Phone</h5>
            <p>(425) 293-9599</p>
            <h5>Email</h5>
            <p>John.Mohr417@gmail.com</p>
            <h5>Web</h5>
            <p>https://www.youtube.com/watch?v=dQw4w9WgXcQ</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2000}
              endYear={2004}
              schoolName="Kamiak High School"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />

               <Education
                 startYear={2020}
                 endYear={2021}
                 schoolName="Full-Stack Development Boot Camp"
                 schoolDescription="After a lot of years spent studying different fields and accomplishing zero Degrees, I've found a love for coding."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2014}
              jobName="Terrain Park Attendant"
              jobDescription="I actively created Terrain Park features for riders to experiment with in conjuction with a snowplow driver. We created rail-jams, ball-taps, half/quarter-pipes, jump features and bordercross circuits in natural rollers."
              />

              <Experience
                startYear={2014}
                endYear={2020}
                jobName="Sous Chef"
                jobDescription="My next career was as a Chef. I had previous experience with Fine Dining as FoH and worked my way up through delis and restaurants from dishwasher to SouS Chef at accomplished breweries and bars."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={60}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={60}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={70}
                    />
                    <Skills
                      skill="React"
                      progress={75}
                      />


          </Cell>
        </Grid>
      
    )
  }
}

export default Resume;