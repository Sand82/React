const Header = () => {
    
  return (
    <header>
      {/* Navigation */}
      <a id="logo" href="/">
        <img id="logo-img" src="./images/logo.png" alt="" />
      </a>
      <nav>
        <div>
          <a href="#">Fun Facts</a>
        </div>
        {/* Logged-in users */}
        <div className="user">
          <a href="#">Add Fact</a>
          <a href="#">Logout</a>
        </div>
        {/* Guest users */}
        <div className="guest">
          <a href="#">Login</a>
          <a href="#">Register</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
