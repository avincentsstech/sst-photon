import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import header from '../../assets/images/appdevelopment.jpg';

class AppDevelopment extends React.Component {
    render() {
        const siteTitle = 'System Soft - Application Development';

        return (
            <div>
                <Helmet title={siteTitle} />

                <section id="section-header">
                  <div style={{float: 'left', width: '100%', position: 'relative'}}>
                    <img src={header} width="100%" />
                    <h1 className="jumbotronRight">We Cover The Entire Spectrum<br /> of Application Development</h1>
                  </div>     
                </section>

                <section id="one" className="main style1 internal">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Application Development & Maintenance (ADM)</h2>
                            </header>
                            <p>System Soft Technologies has an expert team ready to help with your application development needs. Got a problem? We have a solution. We are experienced in all facets of development and build greatness with the Agile development process, V-Model, Waterfall, and Scrum. Moreover, with an extensive library of case studies and a large archive of pre-coded development accelerators our team is capable of producing a working demo quickly and efficiently.</p>
                            <p><strong>Do you need your app to communicate with your ERP or SAP?</strong></p>
                            <p>API integrations are a specialty of System Soft Technologies. We’re able to work with any requirement and create an API from scratch, if your development needs require it.</p>
                            <p><strong>Learn more about our App Development experience today!</strong></p>
                            <p>At System Soft Technologies, we are committed to delivering the best solution to each client and believe in developing long-term partnerships. Our customers value our company because of our expertise in technology and multiple domains, coupled with a range of flexible engagement models for them to choose from depending on the nature, suitability, budget and priority of the assignment.</p>
                            <p>Our application development teams specialize in these public sectors: Healthcare, Enterprise, Retail, Insurance, Financial, Energy.</p>
                            <p>We provide the following app development servics:</p>
                        </div>
                        <div className="col-12">
                        <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Custom Design & Development</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Application Re-Engineering</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Application Enhancement</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">System Integration</h4>
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

AppDevelopment.propTypes = {
    route: React.PropTypes.object
};

export default AppDevelopment;

export const pageQuery = graphql`
    query AppDevelopmentQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;