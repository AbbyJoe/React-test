import React from 'react';

function Bakery() {
  const [darkMode, setDarkMode] = React.useState(getIntinalMode);
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getIntinalMode() {
    const saveMode = JSON.parse(localStorage.getItem('dark'));
    return saveMode || false;
  }
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="bakery-body">
        <div className="sun" onClick={()=> setDarkMode(prevMode => !prevMode)}>
        </div>
        <div className="house-body">
            <div id="triangulo"></div>
            <div className="box"></div>
            <div className="cookery">COOKIE BAKERY</div>
            <div className="hover-switch-1">
              <div className="circle circle-1"></div>
              <img src={require('../assets/cookies.png')} width="60" height="60" alt=""></img>
            </div>
              <div className="hover-switch-2">
              <div className="circle circle-2"></div>
              <img src={require('../assets/cookies2.png')} width="60" height="60" alt=""></img>
            </div>
            <div className="door"><div className="handle"></div></div>
            <input type="checkbox" id="checkmail"></input>
            <label for="checkmail">
              
              <div className="mail-box"> <div className="line"></div><h4>Mailbox</h4></div>
            </label>
        </div>
      </div>
    </div>
  );
}

export default Bakery;
