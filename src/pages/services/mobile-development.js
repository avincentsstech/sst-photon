import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import header from '../../assets/images/mobile-development.jpg';

class MobileDevelopment extends React.Component {
    render() {
        const siteTitle = 'System Soft - Mobile Development';

        return (
            <div>
                <Helmet title={siteTitle} />

                <section id="section-header">
                  <div style={{float: 'left', width: '100%', position: 'relative'}}>
                    <img src={header} width="100%" />
                    <h1 className="jumbotronRight">System Soft Technologies Knows Code</h1>
                  </div>     
                </section>

                <section id="one" className="main style1 internal">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Mobile Development</h2>
                            </header>
                            <p>We are at the forefront of mobile application development with experience in all iOS native programming languages: Swift, C/C++, Objective C and Java for Android development. We’re highly experienced at getting apps to talk with business software through the use of available API technology or custom coding integrations for any business systems your app must connect to in order to share, modify, and otherwise consume on a mobile device.</p>
                            <p><strong>Start a conversation with us today!</strong></p>
                            <p>This is the right place to land if you’d like to explore the services and skills available at System Soft Technologies. Our Enterprise Mobile App Development team is highly skilled in all the popular frameworks, software, and programming languages capable of supporting a full stack iOS or Android development project.</p>
                            <p>Take a moment and read more about our development methodologies, Channel Integration, Mobile Testing and QA Strategy. Here are more areas to explore:</p>
                        </div>
                        <div className="col-12">
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Mobile App Development</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Channel Integration</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

MobileDevelopment.propTypes = {
    route: React.PropTypes.object
};

export default MobileDevelopment;

export const pageQuery = graphql`
    query MobileDevelopmentQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;