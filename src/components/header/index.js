import './header.styl'
function Header() {
    return (

        <header className="text-center" name="home">
            <nav id="menu" className="navbar navbar-default navbar-fixed-top">
                <span className="container">
                    <span className="navbar-header">

                        <a className="navbar-brand" href="index.html"><i className="fa fa-sun-o"></i>Recycle
                            Nest<strong></strong></a>

                        <ul className="nav navbar-nav navbar-right ul-right">
                            <li className="li-right"><a href="#home" className="page-scroll">Home</a></li>
                            <li className="li-right"><a href="#services-section" className="page-scroll">Services</a></li>
                            <li className="li-right"><a href="#works-section" className="page-scroll">Portfolio</a></li>
                            <li className="li-right"><a href="#about-section" className="page-scroll">About</a></li>
                            <li className="li-right"><a href="#contact-section" className="page-scroll">Contact</a></li>
                        </ul>
                    </span>
                </span>
            </nav>
        </header>

    )
}

export default Header