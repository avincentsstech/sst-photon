import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import header from '../../assets/images/cybersecurity.jpg';

class CyberSecurity extends React.Component {
    render() {
        const siteTitle = 'System Soft - Mobile Development';

        return (
            <div>
                <Helmet title={siteTitle} />

                <section id="section-header">
                    <div style={{float: 'left', width: '100%', position: 'relative'}}>
                        <img src={header} width="100%" />
                        <h1 className="jumbotronRight">Full Stack Cyber Security Solutions</h1>
                    </div>
                </section>

                <section id="one" className="main style1 internal">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Cyber Security</h2>
                            </header>
                            <p>In 2016, IBM determined that 60% of cyber-attacks occurred from inside the organization. With System Soft Technologies on your project that risk is mitigated and controls are available to safeguard your most valuable company asset – its’ data.</p>
                            <p>Cyber Security is more than just software. The human element of securing cyber space is extremely critical and deserves considerable investment in educated training. Every member of your organization should understand the path a bad actor would take to infiltrate your organizations human capital. Whether that’s through phishing email schemes or personal contact with your workforce, protecting your assets inside and outside of the digital world is crucial.</p>
                            <p>Our team of highly experience developers and analyst can include every component your organization needs to mitigate its risks to bad actors.</p>
                            <p><strong>Learn more about our cyber security experience:</strong></p>
                        </div>
                        <div className="col-12">
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Cyber Security Assessment</h4>
                                </a>                      
                                <a className="btn btn-border light btn-round" href="#">Read more</a>
                            </div>
                            <div className="servicesHome">
                                <a href="#">
                                    <h4 className="uppercase">Security Intelligence Analytics</h4>
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

CyberSecurity.propTypes = {
    route: React.PropTypes.object
};

export default CyberSecurity;

export const pageQuery = graphql`
    query CyberSecurityQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
