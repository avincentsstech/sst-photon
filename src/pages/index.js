import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Header from "../components/Header";
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import client1 from '../assets/images/24.jpg'
import client2 from '../assets/images/30.jpg'
import client3 from '../assets/images/40.jpg'
import client4 from '../assets/images/46.jpg'
import client5 from '../assets/images/60.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (

            <div className="maincontainer">
            <Helmet>
                <meta name="description" content="testDescription" />
                <meta name="robots" content="NOINDEX, NOFOLLOW" />
                <title>{siteTitle}</title>
            </Helmet>

                <Header />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>SSTech Services</h2>
                            </header>
                            <p>Using the latest technologies and methodologies, SSTech offers a full range of services to meet your mission requirements.</p>
                        </div>
                        <div className="col-6">
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Application<br />Development</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Big Data<br />Analytics</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Cyber<br />Security</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Mobile<br />Development</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Software / QA<br />Testing</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Staff<br />Augmentation</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Data<br />Services</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Microsoft<br />Practice</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Cloud<br />Computing</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style7">
                    <div className="grid-wrapper">

                        <div className="col-6 whyUs">
                            <header className="major">
                                <h2>Why Choose Us</h2>
                            </header>
                            <p>The Keys to achieve our mission: understanding our customers' business challenges while motivating and guiding our employees to provide solutions.</p>
                            <p><strong>Our Guiding Principles</strong></p>
                            <p>System Soft Technologies is sharply focused on constantly building and nurturing its staff with diversity, employee satisfaction, and social responsibility at the forefront.</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>SSTech Solutions</h2>
                            </header>
                            <p>Our mission is to provide clients with innovative IT solutions and consulting to foster a collaborative environment which results in postitive business outcomes.</p>
                        </div>
                        <div className="col-6">
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Insider Threat<br />Detection</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Forensics<br />&nbsp;</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Compliance<br />&nbsp;</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Data<br />Lake</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Healthcare<br />&nbsp;</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Government<br />&nbsp;</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="four" className="main style8 special">
                    <div className="grid-wrapper">
                    <div className="col-6">
                    </div>
                        <div className="ourPromise col-6">
                            <header className="major">
                                <h2>Our Promise</h2>
                            </header>
                            <p>System Soft Technologies is very proud of our overarching principles and perspectives. We deliver on our three-tieres promise: creative thinking, global perspective, and complete customer success.</p>
                            <p><strong>SSTech's Value Proposition</strong></p>
                            <p>Providing extraodinary cost-effective skilled staffing resources and comprehensive solutions at relatively low cost, unrivaled speed and high quality sustainable solutions.</p>
                            <ul className="actions uniform">
                                <li><a href="#" className="button special">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="five" className="main style1 special">
                    <div className="grid-wrapper"> 
                        <div className="col-12">
                            <header className="major">
                                <h2>Our Latest Clients</h2>
                            </header>
                        </div>
                        <div className="col-12">
                            <div className="clientsHome">
                                <img src={client1} width="100%" />
                            </div>
                            <div className="clientsHome">
                                <img src={client2} width="100%" />
                            </div>
                            <div className="clientsHome">
                                <img src={client3} width="100%" />
                            </div>
                            <div className="clientsHome">
                                <img src={client4} width="100%" />
                            </div>
                            <div className="clientsHome">
                                <img src={client5} width="100%" />
                            </div>
                        </div>                            
                        </div>
                </section>

                <section id="four" className="main style9 special">
                    <div className="grid-wrapper">
                        <div className="ourPromise col-6">
                            <header className="major">
                                <h2>Careers at SSTech</h2>
                            </header>
                            <p>We are always looking for bright minds to join our family and team. Check out our latest job openings and apply today.</p>
                            <ul className="actions uniform">
                                <li><a href="#" className="button special">Find Your Position!</a></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="five" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Latest Blog & Events</h2>
                            </header>
                            <p>SSTech Blog News, Events and Social Responsibility</p>
                        </div>
                              {this.props.data.allWordpressPost.edges.map(({ node }) => (
                                <div className="col-4 mbtm1rem" key={node.id}>
                                  <div className="card grid_12">
                                    <OutboundLink href={node.guid} target="_blank">
                                      <h3 className="card-text">
                                      {ReactHtmlParser(node.title)}
                                      </h3>
                                    </OutboundLink>
                                    <span className="card-text">
                                      {ReactHtmlParser(node.excerpt)}
                                    </span>
                                    <OutboundLink href={node.guid} className="btn btn-green button" target="_blank">
                                      Read More
                                    </OutboundLink>
                                  </div>
                                </div>      
                              ))}
                        </div>
                </section>                
            </div>
        );
    }
}

Homepage.propTypes = {
    route: React.PropTypes.object
};

export default Homepage;

export const pageQuery = graphql`
    query IndexQueryAndWordpressQuery {
        site {
            siteMetadata {
                title
            }
        }
        allWordpressPost(limit: 3) {
          edges {
            node {
              id
              guid
              title
              excerpt
            }
          }
        }
    }
`;