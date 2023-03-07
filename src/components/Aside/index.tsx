/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Logo } from "./style";
import { useState, useContext, useEffect } from "react";

import { FaSortUp, FaRegCheckSquare, FaSun, FaMoon } from "react-icons/fa";
import { Switch } from "@mui/material";
import { ControlThemeContext } from "../../context/ControlThemeContext";
import { DevLogo1, DevLogo2 } from "../../assets/logo/DevmotaLogo";

const Aside = () => {
  const [handleAsideWidth, setHandleAsideWidth] = useState(false);

  const [handleThemeSelected, setHandleThemeSelected] = useState(true);

  const [checked, setChecked] = useState(true);

  const handleClick = () => {
    setHandleAsideWidth(!handleAsideWidth);
  };

  const { theme, setTheme } = useContext(ControlThemeContext);

  const handleSwitchChange = (event: any) => {
    setTheme(event.target.checked);
    setHandleThemeSelected(event.target.checked);
    setChecked(event.target.checked);
  };

  const handleButtonChange = () => {
    setTheme(!theme);
    setHandleThemeSelected(!handleThemeSelected);
    setChecked(!checked);
  };

  useEffect(() => {
    setHandleThemeSelected(theme);
    setChecked(theme);
  }, []);

  return (
    <Container retract={handleAsideWidth} themeColor={handleThemeSelected}>
      <aside>
        <Logo retract={handleAsideWidth}>
          {handleAsideWidth ? <DevLogo1 /> : <DevLogo2 />}
        </Logo>
        {handleAsideWidth ? (
          <div className="navExpanded">
            <nav>
              <ul>
                <li>To Do</li>
              </ul>
            </nav>

            <div className="bottomButtons">
              <div className="switchTheme">
                <FaSun />
                <Switch
                  checked={checked}
                  onChange={(event) => handleSwitchChange(event)}
                />
                <FaMoon />
              </div>

              <div className="arrowIcon">
                <button onClick={() => handleClick()}>
                  <FaSortUp />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="navShrunken">
            <nav>
              <ul>
                <li>
                  <FaRegCheckSquare />
                </li>
              </ul>
            </nav>
            <div className="bottomButtons">
              <div className="switchTheme">
                {handleThemeSelected ? (
                  <button>
                    <FaSun onClick={() => handleButtonChange()} />
                  </button>
                ) : (
                  <button>
                    <FaMoon onClick={() => handleButtonChange()} />
                  </button>
                )}
              </div>

              <div className="arrowIcon">
                <button onClick={() => handleClick()}>
                  <FaSortUp />
                </button>
              </div>
            </div>
          </div>
        )}
      </aside>
    </Container>
  );
};

export default Aside;
