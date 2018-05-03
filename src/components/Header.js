import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <h1> Where you see challenges,<br />we see solutions.</h1>
                    <p>With a combination of rare technical knowledge and unmatched expertise across<br />
                    multiple domains, we bring maximum value to every client.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Learn More</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}
 
export default Header
