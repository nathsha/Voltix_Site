import './styles/navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar back fixed-top navbar-expand-lg">
      <a href='/'><img src="https://s3.ap-southeast-1.wasabisys.com/voltixsite/1698732835276_Voltixlogo.png?AWSAccessKeyId=XVDUK932SOJV422A7HQF&Expires=1698938148&Signature=lbyLyCZ1W%2BLBi8Kvi%2BTqh3r7puw%3D" alt="VoltixLogo" className="logo" /></a>

        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/" id="text">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Services" id="text">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Projects" id="text">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/About" id="text">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contact" id="text">
              Contact Us
            </a>
          </li>
        </ul>
        <a className='nav-link' href='/FAQ'><button className="nav-btn">FAQ</button></a>
      </nav>
    </div>
  );
};

export default Navbar;

