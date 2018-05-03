import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import header from '../assets/images/services.jpg';

class Services extends React.Component {
    render() {
        const siteTitle = 'System Soft Services';

        return (
            <div>
                <Helmet title={siteTitle} />

                <section id="section-header">
                  <div style={{float: 'left', width: '100%', position: 'relative'}}>
                    <img src={header} width="100%" />
                    <h1 className="jumbotronRight">Cultivating Our Tools, Technologies & Talent</h1>
                  </div>     
                </section>

                <section id="one" className="main style1 internal">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>System Soft Services</h2>
                            </header>
                            <p>At SSTech, the growth of our arsenal of tools, technologies, and talent is a priority. Armed with the latest methodologies, and with a sharp focus on meeting your mission requirements, we are constantly evolving our services capabilities.</p>
                            <p>We provide the following servics:</p>
                        </div>
                        <div className="col-6">
                        <div className="servicesHome">
                                <a href="/services/appdevelopment/">
                                    <h4 className="uppercase">Application<br />Development</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="/services/appdevelopment/">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="/services/bigdata/">
                                    <h4 className="uppercase">Big Data<br />Analytics</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="/services/bigdata/">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="/services/cyber-security/">
                                    <h4 className="uppercase">Cyber<br />Security</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="/services/cyber-security/">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="/services/mobile-development/">
                                    <h4 className="uppercase">Mobile<br />Development</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="/services/mobile-development/">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="/services/software-qa-testing/">
                                    <h4 className="uppercase">Software / QA<br />Testing</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="/services/software-qa-testing/">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="/services/staff-augmentation/">
                                    <h4 className="uppercase">Staff<br />Augmentation</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="/services/staff-augmentation/">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="/services/data-services/">
                                    <h4 className="uppercase">Data<br />Services</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="/services/data-services/">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="/services/microsoft-practice/">
                                    <h4 className="uppercase">Microsoft<br />Practice</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="/services/microsoft-practice/">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="/services/cloud-computing/">
                                    <h4 className="uppercase">Cloud<br />Computing</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="/services/cloud-computing/">Read more</a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

Services.propTypes = {
    route: React.PropTypes.object
};

export default Services;

export const pageQuery = graphql`
    query ServicesQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;