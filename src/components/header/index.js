import './header.styl'

function Header() {

    return (

        <header className="text-center" name="home">
            <nav id="menu" className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">

                        <a className="navbar-brand" href="index.html"><i className="fa fa-sun-o"></i>Recycle
                            Nest<strong></strong></a>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#home" className="page-scroll">Home</a></li>
                            <li><a href="#services-section" className="page-scroll">Services</a></li>
                            <li><a href="#works-section" className="page-scroll">Portfolio</a></li>
                            <li><a href="#about-section" className="page-scroll">About</a></li>
                            <li><a href="#contact-section" className="page-scroll">Contact</a></li>
                        </ul>

                    </div>


                </div>
            </nav>
            <div className="intro-text">
                <h1>Welcome to <strong>Recycle Nest</strong></h1>

                <div className="focus">
                    <p>We focus on garbage collection</p>
                </div>

                <div className="learn-more">
                    <a href="#services-section" className="btn btn-default btn-lg page-scroll">LEARN MORE
                    </a>
                </div>
            </div>

        </header>

    )
}

export default Header