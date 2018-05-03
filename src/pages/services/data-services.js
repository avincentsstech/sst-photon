import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import header from '../../assets/images/dataservices.jpg';

class DataServices extends React.Component {
    render() {
        const siteTitle = 'System Soft - Cloud Computing';

        return (
            <div>
                <Helmet title={siteTitle} />
                <section id="section-header">
                  <div style={{float: 'left', width: '100%', position: 'relative'}}>
                    <img src={header} width="100%" />
                    <h1 className="jumbotronRight">Data Services That Fulfill IT Initiatives</h1>
                  </div>     
                </section>

                <section id="one" className="main style1 internal">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Data Services</h2>
                            </header>
                            <p>In order to help the enterprise manage one of its most valued assets – information - System Soft Technologies offers a range of Data Services that fulfill a variety of IT initiatives. Due to the ever-increasing volume and variety of the data every business is based upon, it is becoming more difficult than ever for both IT staff and business users to meet their mission requirements. IT managers are finding that basic data services have become an important factor in analyzing, understanding, and acting on their data, while assuring its accuracy and reliability at the same time.</p>
                            <p>The goal of this approach, of course, is to make optimal decisions that lead to increased market share and bottom-line growth. Through the efforts of our experienced in-house team of analysts, Data Services offered by System Soft Technologies provide a significant boost in moving towards final solutions that help reach those goals.</p>
                            <p>The range of Data Services offered by SSTech are described below:</p>
                            <ul>
                                <li><strong>Data Asset Extraction:</strong>The SSTech team offers advanced skills in taking in large amounts of raw data supplied by the client, and parsing that data to serve multiple objects.</li>
                                <li><strong>Data Quantification:</strong>Raw data submitted by the client is filtered and organized as defined by the job spec, allowing the performance of a variety of analytical functions that fulfill the project requirements.</li>
                                <li><strong>Data Conversion and Transfer:</strong>Data of all types is compiled and then converted efficiently to the target format to meet the job specification.</li>
                                <li><strong>Legacy System Data Migration:</strong>At the juncture of Big Data/Data Migration & Analytics and Legacy system conversion is the need to convert, filter and organize large amounts of data in what is effectively a single step. The team’s skillsets extend to this area, working in tandem with the SSTech Big Data staff to help form a complete Legacy Data Migration solution.</li>
                            </ul>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

DataServices.propTypes = {
    route: React.PropTypes.object
};

export default DataServices;

export const pageQuery = graphql`
    query DataServicesQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
