import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import header from '../../assets/images/bigdata.jpg';

class BigData extends React.Component {
    render() {
        const siteTitle = 'System Soft - Big Data';

        return (
            <div>
                <Helmet title={siteTitle} />

                <section id="section-header">
                  <div style={{float: 'left', width: '100%', position: 'relative'}}>
                    <img src={header} width="100%" />
                    <h1 className="jumbotronRight">Explore the Many Facets of<br /> Our Big Data Services</h1>
                  </div>     
                </section>

                <section id="one" className="main style1 internal">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Big Data Solutions</h2>
                            </header>
                            <p>System Soft Technologies is an experienced developer of Big Data solutions. We’ve spent more than a year developing our own solution accelerators that we believe will push your development to a working demo faster than any other vendor and with a greater accuracy than can be achieved from any other development approach.</p>
                        </div>
                        <div className="col-12">
                        <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Big Data Analytis</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Data Science</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Data Migration</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Data Warehousing</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Master Data Management</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Data Governance</h4>
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

BigData.propTypes = {
    route: React.PropTypes.object
};

export default BigData;

export const pageQuery = graphql`
    query BigDataQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;