import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import header from '../../assets/images/careers.jpg';

class Careers extends React.Component {
    render() {
        const siteTitle = 'System Soft - Careers';

        return (
            <div>
                <Helmet title={siteTitle} />

                <section id="section-header">
                  <div style={{float: 'left', width: '100%', position: 'relative'}}>
                    <img src={header} width="100%" />
                    <h1 className="jumbotronRight">SSTech Careers</h1>
                  </div>     
                </section>

                <section id="one" className="main style1 internal">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Current Job Openings</h2>
                            </header>
                            <p>System Soft Technologies is an experienced developer of Big Data solutions. We’ve spent more than a year developing our own solution accelerators that we believe will push your development to a working demo faster than any other vendor and with a greater accuracy than can be achieved from any other development approach.</p>
                        </div>
                        <div className="col-12">
                            <header className="major">
                                <h2>Working at SSTech</h2>
                            </header>
                            <p>In our ever-changing high-tech business world, true success is built around the people. System Soft Technologies seeks out the best employees, helps train them in the latest technologies, and instills them with the highest values surrounding ethics, trust and relationships. This, coupled with the people-to-people, collaborative approach we take in all phases of working with our customers, is a key contributor to our company’s amazing growth since being founded in 1999.</p>
                            <p>System Soft Technologies is extremely proud of all of our employees, and we constantly strive to help and nurture them throughout all of their activities and responsibilities. During this process, we have every employee’s long-term career goals in mind. To accomplish this, we place emphasis on:</p>
                            <ul>
                            	<li>A fast-paced, healthy, family-oriented work environment for all</li>
                            	<li>Exposure and advanced training in the latest new industries, domains and technologies</li>
                            	<li>Focus on team projects aimed at achieving success in the tasks at hand, and with an eye to enhancing the knowledge and expertise of every member of the team</li>
                            	<li>Maintaining a great life/work balance both professionally and personally</li>
                            	<li>Giving all team members the opportunity to work with Fortune 500 and other high-level, cutting-edge clients on a variety of types of projects</li>
                            	<li>Enhancing comradery and employee satisfaction through group social events like birthday celebrations, luncheons, anniversary announcements, etc.</li>
                            </ul>
                            <p>In all of its hiring and employee relations activities, System Soft Technologies maintains compliance with federal and state government EEOC, E-Verify and Affirmative Action policies.</p>
                        </div>
                        <div className="col-12">
                            <header className="major">
                                <h2>Benefits Overview</h2>
                            </header>
                            <p>System Soft Technologies offers a range of comprehensive benefits, most of which are available the employee’s first day of hire.</p>
                            <ul>
                            	<li>Health Insurance</li>
                            	<li>Dental Insurance</li>
                            	<li>Vision insurance</li>
                            	<li>Employer-Paid Basic Life Insurance</li>
                            	<li>Voluntary Supplemental Insurance</li>
                            	<li>401(k) Retirement Plan</li>
                            	<li>Flexible Spending Account (FSA) Programs</li>
                            	<li>Direct Deposit</li>
                            	<li>Paid Time Off</li>
                            	<li>Employee Referral Bonus</li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

Careers.propTypes = {
    route: React.PropTypes.object
};

export default Careers;

export const pageQuery = graphql`
    query CareersQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;