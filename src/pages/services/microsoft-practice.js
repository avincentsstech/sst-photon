import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import header from '../../assets/images/microsoftpractice.jpg';
import ven from '../../assets/images/ven-diagram.png';
import shp from '../../assets/images/sharepoint-wheel.png';

class MSPractice extends React.Component {
    render() {
        const siteTitle = 'System Soft - Microsoft Practice';

        return (
            <div>
                <Helmet title={siteTitle} />
                <section id="section-header">
                  <div style={{float: 'left', width: '100%', position: 'relative'}}>
                    <img src={header} width="100%" />
                    <h1 className="jumbotronRight">A Wide Spectrum of Microsoft Platforms<br /> and Professional Services</h1>
                  </div>     
                </section>

                <section id="one" className="main style1 internal">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Microsoft Practice</h2>
                            </header>
                            <p>System Soft Technologies has built a vast knowledge base in support of a wide spectrum of Microsoft platforms and Professional Services, including Cloud Platform, .NET, SharePoint, SQL Server, Azure, Exchange Office 365, and much more.</p>
                            <p><strong>Microsoft Azure</strong></p>
                            <p>For Cloud-based IT solutions which require flexibility and dynamic scalability, SSTech brings several years of experience with the various components of Microsoft Azure, and executes across a wide plane of platforms, languages, tools, operating systems, and frameworks. System Soft Technologies provides both small and large clients with enterprise-wide solutions, and provides both platform and infrastructure design and development, as well as hybrid solutions.</p>
                            <p>Through our partnership with Microsoft, we deliver everything from content management to mission-critical financial systems through the utilization of the Azure platform. Microsoft Azure’s benefits are well known, and SSTech employs the latest technology and the most tools to deliver the range of those benefits to every client. These include infrastructure design, Agile development on the Cloud, real-time analytics, reporting and all with superior flexibility and scalability.</p>
                            <p><strong>Data Analytics</strong></p>
                            <p>The ability to organize, visualize, and analyze large amounts of data has become critical to more and more enterprises. Many companies lack the resources to adapt standard tools to their particular data structure, as well as the sheer capacity to handle very large amounts of data.</p>
                            <p>Leveraging SSTech’s long experience in design and development for Analytics, we employ Microsoft tools to deliver leading-edge Data Analytics design, development, and implementation. Within our family of services, we have Big Data solutions, Data Warehousing, Data Governance, and Data Migration.</p>
                            <p>SSTech’s teams work closely with every client to build a roadmap and a strategy that is perfectly suited to the specific needs of the company. We then move from data gathering to data insight, and accumulate all relevant data. Through Microsoft Reporting Services (SSRS) and our own proprietary analytics visualization methodologies, we show the client a true picture of their data requirements. Finally, the data is analyzed, the solution is formulated, and the strategy for execution follows.</p>
                            <p><strong>Application Development</strong></p>
                            <p>For customized solutions tailored to the client’s emerging technology challenges and specific requirements, SSTech leverages its application development and maintenance set of services, which include:</p>
                            <ul>
                                <li>Application Enhancement</li>
                                <li>Application Re-Engineering</li>
                                <li>Custom Development</li>
                                <li>System Intergration</li>
                            </ul>
                            <p>These areas are all backed by teams armed with the entire spectrum of Microsoft tools and platforms, including Visual Studio, Cloud, .NET, SQL Server, ASP, Azure, etc.</p>
                            <p><strong>.Net Framework</strong></p>
                            <p>SSTech’s extensive experience with Microsoft platforms starts with the .NET family of programs, and forms our .NET Center of Excellence (CoE). The many aspects of the CoE include:</p>
                            <ul>
                                <li>Silver Partnership with Microsoft</li>
                                <li><strong>Competency building</strong> – includes training on the latest Microsoft technologies</li>
                                <li><strong>Knowledge Management</strong> – both knowledge sharing sessions and best practices collation</li>
                                <li><strong>Tools/Accelerators development</strong> – with multiple benefits, including increased productivity</li>
                                <li>.NET framework supported by Extended Development Kit</li>
                            </ul>
                            <p>These various disciplines share a number of significant benefits:</p>
                            <ul>
                                <li><strong>Improved Time to Market</strong> – integration with client applications, plus 25% reduction in development efforts for a typical .NET application</li>
                                <li><strong>Reduced Cost</strong> – thanks to the reduction in development and testing efforts</li>
                                <li><strong>Improved Quality</strong> – proven components which have completely developed and tested are utilized in multiple deployments</li>
                            </ul>
                            <p><strong>Extended Devlopment Kit (XDK) and MS Accelerators</strong></p>
                            <p>SSTech has now built a versatile Extended Development Kit is comprised of a set of pre-tested, scalable modules, or Microsoft Accelerators. The characteristics of SSTech’s XDK are at the core of how we quickly and effectively deliver custom-tailored solutions built on Microsoft technology. These include:</p>
                            <ul>
                                <li>Built on .NET framework</li>
                                <li>Business Centric</li>
                                <li>Application Independent</li>
                                <li>Service Oriented</li>
                                <li>Loosely coupled</li>
                                <li>Accelerated Time to Market</li>
                                <li>Seamless integration to UI and Data Access layers</li>
                                <li>Integration with User Application</li>
                            </ul>
                            <p>System Soft Technologies has developed a family of software development tools called Solution Accelerators. These sets of pre-developed, pre-tested components not only speed up development processes, but also improve time-to-market, deliver better overall quality, and reduce costs.</p>
                            <p>The benefits of our solution accelerators are many. Unlike traditional methodologies, they are pre-developed and easily integrated, which means they can achieve significantly faster development cycles. They are also already designed and tested with a focus on business-specific functionality, so the improvement in quality and performance is also substantial. Furthermore, since there is no requirement for coding or testing of the components themselves, as well as minimal integration effort, major cost savings are realized.</p>
                            <p>SSTech’s Accelerators have been employed across a variety of projects. They represent a cross-section of critical functions that have wide application banking, finance, retail, manufacturing, healthcare, and many other verticals. Below are some of our components and examples of their usage:</p>
                            <img src={ven} />
                            <ul>
                                <li>Authentication and Authorization: Portals, password-protected login screens</li>
                                <li>Alerts and Mail Interface: Web and event-based notifications via text, email, etc.</li>
                                <li>Export: Import/export of data in web applications</li>
                                <li>Print Format: General printing/setup</li>
                                <li>Data Conversion: Legacy system data conversion to new platform</li>
                                <li>Dynamic UI: Forms, dashboards with situation-based screen layout</li>
                                <li>Data Validation String/character checking on forms</li>
                            </ul>
                            <p><strong>SharePoint</strong></p>
                            <img src={shp} className="float-right" />
                            <p>System Soft Technologies’ has experience in the development and deployment of MS Sharepoint solutions, including intranet, extranet, content management, document management, enterprise social networking, business intelligence, and web content management.</p>
                            <p>System Soft Technologies approaches Sharepoint solutions first by carefully evaluating the customer’s overall goals, including cost, time-to-market, and ROI. We provide both discovery and an implementation roadmap, which includes data migration requirements. We leverage our wide-ranging experience in various industries and verticals, which includes Banking & Finance, Manufacturing, Insurance, Government, and many more.</p>
                            <p>During the development phase, our team members focus on building an architectural design which assures that end-to-end implementation goes smoothly. We engage with the client and work together to build a scalable, viable solution, and follow up with deployment, integration, testing and training.</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

MSPractice.propTypes = {
    route: React.PropTypes.object
};

export default MSPractice;

export const pageQuery = graphql`
    query MSPracticeQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
