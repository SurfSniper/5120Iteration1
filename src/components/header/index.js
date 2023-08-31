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
                            <li className="li-right"><a href="#education" className="page-scroll">Education</a></li>
                            <li className="li-right"><a href="#shawn" className="page-scroll">Shawn</a></li>
                            <li className="li-right"><a href="#search" className="page-scroll">search</a></li>
                            <li className="li-right"><a href="#about" className="page-scroll">about us</a></li>
                        </ul>
                    </span>
                </span>
            </nav>

            <div className="intro-text">
                <h1>Welcome to <strong>Recycle Nest</strong></h1>

                <div className="focus">
                    <p>We focus on garbage collection</p>
                </div>

                <div className="learn-more">
                    <a className="btn btn-default btn-lg page-scroll">LEARN MORE
                    </a>
                </div>
            </div>
        </header>

    )
}

export default Header