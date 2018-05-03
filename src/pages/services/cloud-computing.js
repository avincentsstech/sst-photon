import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import header from '../../assets/images/cloudcomputing.jpg';

class CloudComputing extends React.Component {
    render() {
        const siteTitle = 'System Soft - Cloud Computing';

        return (
            <div>
                <Helmet title={siteTitle} />
                <section id="section-header">
                  <div style={{float: 'left', width: '100%', position: 'relative'}}>
                    <img src={header} width="100%" />
                    <h1 className="jumbotronRight">Architecture Design, Migrations & Strategy</h1>
                  </div>     
                </section>

                <section id="one" className="main style1 internal">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Cloud Computing</h2>
                            </header>
                            <p>System Soft Technologies is a leader among Government, Enterprise and Mid-Small size businesses. Our teams are well versed in all aspects of Application Development, Big Data Analytics, and the hosting architecture that comes along with these types of complex installations. We have experience working with the leading providers of Cloud Computing, namely: Amazon AWS, Microsoft Azure, and Rackspace. Whether you’re hosting one application or several we can help - Whether you’re migrating to the cloud or looking to integrate services to your existing cloud environment –System Soft Technologies has the experience and motivation to help you succeed.</p>
                            <p><strong>Steady-state Management of the Cloud Environment</strong></p>
                            <p>The cloud delivers unparalleled agility, efficiency and innovation, but only when implemented through a comprehensive cloud strategy. At System Soft Technologies, we have designed, developed and implemented cloud solutions for enterprise customers across a variety of industries. This broad perspective provides our clients with unprecedented insight into how market leaders use the cloud and the prerequisites to leveraging its full potential. Beginning with the definition of a cloud strategy and roadmap, our transformation services cover the entire cloud journey: workload level discovery and analysis, cloud migration, validation against regulatory and policy constraints, and steady-state management of the cloud environment that includes establishing a governance model with solid delivery and operational policies.</p>
                            <p><strong>Architecture Design</strong></p>
                            <p>Our Cloud Architecture Design group leverages our proven reference architectures for the public cloud. We make sure you can maintain your standards, controls, availability, and performance targets while staying within your projected budget. Once your organization has made the decision to migrate to the cloud, System Soft Technologies’ highly skilled cloud architects can help build the optimal environment. Our process analyzes every layer in detail to ensure all your requirements are met, and delivers the most cost-effective, secure, fault-tolerant, and flexible cloud architecture possible.</p>
                            <p><strong>Migration</strong></p>
                            <p>Our team facilitates the migration of your key business applications to Amazon Web Services while maintaining both high performance and scalability. In addition, we provide a detailed understanding of the forecast ROI both before and after the migration process. Migrating a large group of applications to AWS requires detailed planning and precise execution — and we have helped many companies with just that. And, as part of making your mass migration seamless at every step, we will develop enterprise security and cloud governance models with which your company can fully leverage the power of AWS.</p>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

CloudComputing.propTypes = {
    route: React.PropTypes.object
};

export default CloudComputing;

export const pageQuery = graphql`
    query CloudComputingQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
