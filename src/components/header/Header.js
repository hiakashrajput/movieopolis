import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="menu">
                <Link to="/" class='menu-logo' ><span>Movieopolis</span></Link>
                <Link to="/movies/popular" class='menu-item' ><span>Popular</span></Link>
                <Link to="/movies/top_rated" class='menu-item' ><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" class='menu-item' ><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

<script>

</script>

export default Header