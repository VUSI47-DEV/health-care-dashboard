const Header = () => {
  return (
    <div>
      <nav className="navigation">
        <div className="">
          <img src="/src/assets/TestLogo.svg" alt="logo" />
        </div>
        <ul className="nav-items">
          <li>
            <img src="/src/assets/home_FILL0_wght300_GRAD0_opsz24.png" alt="" />
            <a>Overview</a>
          </li>
          <li>
            <img
              src="/src/assets/group_FILL0_wght300_GRAD0_opsz24.png"
              alt=""
            />
            <a href="">Patients</a>
          </li>

          <li>
            <img
              src="/src/assets/calendar_today_FILL0_wght300_GRAD0_opsz24.png"
              alt=""
            />
            <a href="">Schedule</a>
          </li>
          <li>
            <img
              src="/src/assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.png"
              alt=""
            />
            <a href="">Message</a>
          </li>
          <li>
            <img
              src="/src/assets/credit_card_FILL0_wght300_GRAD0_opsz24.png"
              alt=""
            />
            <a href="">Transaction</a>
          </li>
        </ul>
        <div className="profile-container">
          <div className="user">
            <img className="profile-user-image" src="/src/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" alt="profile-image" />
            <div className="user-details">
              <h6>Dr, Jose Simmons</h6>
              <p>General Practiioner</p>
            </div>
          </div>
          <div className="settings">
            <img src="/src/assets/settings_FILL0_wght300_GRAD0_opsz24.png" alt="gear-icon" />
            <img src="/src/assets/more_vert_FILL0_wght300_GRAD0_opsz24.png" alt="" />            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
