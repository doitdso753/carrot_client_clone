import './index.css';
import Logo from '../../assets/images/logo.svg';

function Header() {
  return (
    <header className="gnb_wrap">
      <div className="gnb">
        {/* Left Area */}
        <div className="flex flex-row">
          {/* Logo */}
          <a href="/" className="gnb_logo">
            <img src={Logo} alt="로고" />
          </a>
          {/* Menu */}
          <ul className="gnb_menu">
            <li>
              <a className="active">중고거래</a>
            </li>
            <li>
              <a>동네업체</a>
            </li>
            <li>
              <a>알바</a>
            </li>
            <li>
              <a>부동산 직거래</a>
            </li>
            <li>
              <a>중고차 직거래</a>
            </li>
          </ul>
        </div>
        {/* Right Area */}
        <div>
          {/*  Search Bar */}
          <div>Search Bar</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
