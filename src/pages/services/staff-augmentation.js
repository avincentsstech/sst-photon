import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import header from '../../assets/images/staffaugmentation.jpg';

class StaffAug extends React.Component {
    render() {
        const siteTitle = 'System Soft - Staff Aug';

        return (
            <div>
                <Helmet title={siteTitle} />
                <section id="section-header">
                  <div style={{float: 'left', width: '100%', position: 'relative'}}>
                    <img src={header} width="100%" />
                    <h1 className="jumbotronRight">Staffed With Unique Skills and Experience</h1>
                  </div>     
                </section>

                <section id="one" className="main style1 internal">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Project & Staff Augmentation</h2>
                            </header>
                            <p>IT departments around the globe are often faced with near- and long-term capacity deficiencies in the face of hiring and staffing restrictions. With an ever-expanding global technological demand for modern businesses, it is more important than ever for organizations to have properly managed IT resources. With fifteen years of successfully recruiting and assigning talented IT professionals to our clients, System Soft Technologies has become a leader in IT staff augmentation. In doing so, we now offer an array of staffing and solutions services, each customized to perfectly fit our client’s mission requirements, and managed under a highly collaborative business model.</p>
                            <p>At SSTech, we believe that our most precious asset is our workforce. Our staffing team is comprised of highly skilled managers and recruiters who utilize the latest search and screening methods to locate, manage, and tailor resources to best meet our client’s needs.</p>
                            <ul>
                                <li>SSTech screening process insures clients have the best talented IT professionals at their disposal, in the specific positions they need to fill</li>
                                <li>Client enjoys shortened hiring timelines with reasonable costs</li>
                                <li>Client assured fast and efficient project completion</li>
                            </ul>
                            <p>System Soft Technologies' Project and Staff Augmentation services team members offer unique skills and practices that set us apart from typical mid-level IT staffing companies. One major benefit: SSTech has never had any projects terminated our over fifteen years in the industry. Every project launched by our IT professionals have reached full completion and implementation, resulting in maximum customer satisfaction. Clients can be assured that we will see every project to the very end, and continue to assist with our quality assurance and support services.</p>
                            <p>These perfect results are due to a number of core values that we hold in the highest regard, and which enable us to exceed expectations and deliver high quality solutions:</p>
                            <ul>
                                <li><strong>Commitment to adaptability.</strong> Shifting client needs and mission variables are always taken into account, assuring that the client gets what they want, when they want it.</li>
                                <li><strong>Commitment to Agile techniques</strong>, which allow us to deliver speedy and responsive solutions, regardless of the size or scope of the project.</li>
                                <li><strong>Commitment to our core value of integrity.</strong> SSTech is, and always has been, committed to exercising ethical, sustainable and responsible business practices.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

StaffAug.propTypes = {
    route: React.PropTypes.object
};

export default StaffAug;

export const pageQuery = graphql`
    query StaffAugQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
