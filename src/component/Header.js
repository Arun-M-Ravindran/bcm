import React, { Component } from 'react'
import { Link} from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <header>
                <strong>M____O</strong>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/maping">Maping</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Header;