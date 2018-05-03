import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import header from '../../assets/images/softwareqatesting.jpg';

class SoftwareQATesting extends React.Component {
    render() {
        const siteTitle = 'System Soft - Mobile Development';

        return (
            <div>
                <Helmet title={siteTitle} />
                <section id="section-header">
                  <div style={{float: 'left', width: '100%', position: 'relative'}}>
                    <img src={header} width="100%" />
                    <h1 className="jumbotronRight">SSTECH Quality Assurance and Testing Since 1999</h1>
                  </div>     
                </section>

                <section id="one" className="main style1 internal">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Software & QA Testing</h2>
                            </header>
                            <p>System Soft Technologies offers a broad range of industry leading SQA testing services, backed by a highly experienced and knowledgeable team.</p>
                        </div>
                        <div className="col-12">
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">App Testing</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Mobile Testing</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Automation Testing</h4>
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

SoftwareQATesting.propTypes = {
    route: React.PropTypes.object
};

export default SoftwareQATesting;

export const pageQuery = graphql`
    query SoftwareQATestingQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
