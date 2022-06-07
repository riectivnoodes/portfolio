import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Documentation.css'

const Header = () => {

    return (
        <header className='Documentation-Header bg-dark' >
            <div className='Documentation-Header-Logo'>
                <Link className='h-100 d-flex align-items-center' to='/'>
                    <svg className='Documentation-Svg-Logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 391.89 348.32">
                        <path d="M59.84,210.18a1.83,1.83,0,0,0,.18.34,2.17,2.17,0,0,0,.23.3,3.1,3.1,0,0,0,.34.27c.08,0,.13.11.21.16l26,13.18v97.34a.45.45,0,0,0,0,.11,1,1,0,0,0,0,.25,2.5,2.5,0,0,0,.07.26l.11.24s0,.07,0,.11,0,0,.07.06a2,2,0,0,0,.19.22,1.76,1.76,0,0,0,.34.27c.07,0,.12.11.2.16h0l95.81,48.67v42.25a1,1,0,0,0,.06.23,1.29,1.29,0,0,0,.08.39,2.17,2.17,0,0,0,.19.33,1.7,1.7,0,0,0,.23.3,2.18,2.18,0,0,0,.34.26,1.56,1.56,0,0,0,.2.16l27.05,13.74h0l.11,0a2.38,2.38,0,0,0,1,.22h0a2.43,2.43,0,0,0,1-.22.35.35,0,0,1,.11,0h0l41.59-21.12,26.09,13.24h0l.11,0a2.27,2.27,0,0,0,1,.23h0a2.27,2.27,0,0,0,1-.23.35.35,0,0,0,.11,0h0l27-13.73a1.56,1.56,0,0,0,.2-.16,2.18,2.18,0,0,0,.34-.26,3,3,0,0,0,.23-.3,2.17,2.17,0,0,0,.19-.33,2.7,2.7,0,0,0,.08-.39.94.94,0,0,0,.06-.24V380l95.5-48.5a2,2,0,0,0,1.66-1.84V232.32l41.27-21c.08,0,.13-.11.21-.16a2.18,2.18,0,0,0,.34-.26,3,3,0,0,0,.23-.3,2.21,2.21,0,0,0,.18-.34,1.62,1.62,0,0,0,.09-.38,1.69,1.69,0,0,0,0-.24V182.09s0-.07,0-.11,0-.16,0-.25a2.58,2.58,0,0,0-.08-.26,1.63,1.63,0,0,0-.11-.23s0-.08,0-.11-.06-.06-.09-.09a1.63,1.63,0,0,0-.17-.2l-.22-.19a1.34,1.34,0,0,0-.23-.16.71.71,0,0,0-.09-.07l-41.28-21V132.85a.53.53,0,0,0,0-.12,2.13,2.13,0,0,0,0-.25,2.58,2.58,0,0,0-.08-.26A2.4,2.4,0,0,0,409,132s0-.08,0-.11l-.09-.09a1.71,1.71,0,0,0-.18-.2l-.21-.19a1.5,1.5,0,0,0-.23-.15s-.06-.06-.1-.08L380.83,117.3l-.24-.07a3.33,3.33,0,0,0-.45-.13,2.82,2.82,0,0,0-.82,0,3.33,3.33,0,0,0-.45.13l-.24.07-26.06,13.26L257.08,82a2.17,2.17,0,0,0-.24-.07,1.78,1.78,0,0,0-.45-.13,1.75,1.75,0,0,0-.4,0,2.12,2.12,0,0,0-.43,0,1.93,1.93,0,0,0-.41.12,2.13,2.13,0,0,0-.27.08l-95.94,48.73L117.1,109.43a2.17,2.17,0,0,0-.24-.07,1.78,1.78,0,0,0-.45-.13,2.82,2.82,0,0,0-.82,0,1.78,1.78,0,0,0-.45.13,2.17,2.17,0,0,0-.24.07L87.85,123.17a.71.71,0,0,0-.09.07l-.24.16-.21.19a1.71,1.71,0,0,0-.18.2s-.06,0-.08.08,0,.08,0,.11l-.11.24a2.5,2.5,0,0,0-.07.26,1,1,0,0,0,0,.25.45.45,0,0,0,0,.11v42.51L61,180.42l-.1.07-.22.16-.22.19-.18.2s-.06.05-.08.09,0,.07,0,.1a1.28,1.28,0,0,0-.11.24,1.29,1.29,0,0,0-.08.26,1,1,0,0,0,0,.24.45.45,0,0,0,0,.11l-.22,27.48a2,2,0,0,0,0,.24A1.62,1.62,0,0,0,59.84,210.18Zm61-28.3,132.76-67.43.19,22.8-110.5,56.13ZM353.63,134.5l0,0,26.06-13.26,22.88,11.62-23.67,12a1.51,1.51,0,0,0-.31.16l-95.87,48.57-22.65-11.5ZM93.36,321.77,116,310.27l138.66,70.42s.07,0,.1,0a2.49,2.49,0,0,0,1,.24h0a2.28,2.28,0,0,0,1-.23,1.76,1.76,0,0,0,.23-.14,1.93,1.93,0,0,0,.57-.49s.09-.06.13-.11,0-.07,0-.11a2.35,2.35,0,0,0,.14-.37,1.23,1.23,0,0,0,.08-.37.53.53,0,0,0,0-.12V309.14l22.64-11.5V416.87Zm47.49-69.87v41.28l-22.65,11.5V240.4Zm44.93-75.64,92.62,47.05-22.63,11.5-92.64-47.05Zm121.88,36.66v11.41L285,236V224.43l9.76-5ZM258,304.67V281.56L282.7,269l.05,0a2.28,2.28,0,0,0,1.91-1s0,0,0-.05l65.91-33.48v23.12Zm-6.6-67.62-11.47,5.82-22.68-11.62,11.38-5.77Zm29.24,1.18L258,249.87v-11.7l22.64-11.51Zm-38.51,37.51,11.47,5.82v23.11l-11.47-5.82Zm2.19-30.62,9.28-4.72v9.47Zm9.28,9.23v22.74l-11.47-5.83V248.48Zm-11.47,49,11.47,5.82v39l-11.47-5.82Zm70-21.65,38.53-19.57V301l-38.53,19.57ZM350.59,230l-92.63,47V254.35l92.63-47.6Zm-126.41-6.8L212.82,229,190.4,217.52l11.25-5.72Zm13.51,23v93.89l-22.56-11.45v-94Zm15.87,106.43v23L120.41,308l22.64-11.5Zm-69.88-40-38.43-19.51v-39l38.43,19.51ZM285,295.41l22.65-11.5V405.38L285,416.87ZM312.06,325l40.62-20.64,22.65,11.51-63.27,32.14Zm65.47-12.49L355,301.11V188.87l22.54-11.63ZM350.59,202.27l-38.53,19.8V210.69l38.53-19.58Zm-58,13.84-9.76,5-92.63-47,22.64-11.5,41.8,21.23h0l50.82,25.81ZM256,140.6l38.45,19.54-38.72,19.69-38.49-19.54Zm42.85,17.3-40.66-20.66-.18-23,63.36,32.18ZM158.73,190l38.52,19.56L186,215.28l-38.37-19.66Zm52,42.42v94l-22.65-11.5V220.81Zm-27,36.76L64.11,208.46l.19-23,119.38,60.63Zm-69.88-31v68.75l-22.65,11.5V226.66Zm96.93,147.7v38.89l-22.65-11.5v-38.9Zm4.4,38.89V388.09l36.09,18.33Zm96.93-72.23,68.75-34.93h0c.08,0,.13-.11.21-.16a1.7,1.7,0,0,0,.33-.27,2,2,0,0,0,.19-.22s.06,0,.08-.06,0-.08,0-.11a2.56,2.56,0,0,0,.11-.24,2,2,0,0,0,.08-.26,1.87,1.87,0,0,0,0-.25s0-.07,0-.11v-142a.61.61,0,0,0,0-.13,1.55,1.55,0,0,0-.08-.36,1.58,1.58,0,0,0-.15-.38s0-.08,0-.11-.12-.11-.17-.17a2.2,2.2,0,0,0-.31-.3,2.33,2.33,0,0,0-.34-.2,1.61,1.61,0,0,0-.38-.16A1.63,1.63,0,0,0,380,172a2.38,2.38,0,0,0-.26-.05l-.13,0a2.87,2.87,0,0,0-.44.08,2.46,2.46,0,0,0-.41.13s-.09,0-.13,0l-26.94,13.9h0l-41.81,21.24-22.7-11.52L404.82,136.2V328.41l-92.76,47.11Zm97.16-147.78,38-19.29v23.11l-38,19.29ZM445,182.09l-35.77,18.18V163.88ZM325.75,144.2l-68.46-34.77a2.42,2.42,0,0,0-1.29-.22c-.09,0-.16,0-.24,0h0l-.11,0a3.39,3.39,0,0,0-.44.08,2.8,2.8,0,0,0-.41.13.53.53,0,0,0-.12,0l-138.41,70.3h-.12a.5.5,0,0,0-.13,0,2.38,2.38,0,0,0-.26,0,2,2,0,0,0-.44.08,2.17,2.17,0,0,0-.38.16,1.9,1.9,0,0,0-.34.2,2.07,2.07,0,0,0-.3.29c-.06.07-.14.11-.18.18a.61.61,0,0,0,0,.12,2.24,2.24,0,0,0-.14.36,1.29,1.29,0,0,0-.08.38.53.53,0,0,0,0,.12v.44a.42.42,0,0,0,0,.12,1.17,1.17,0,0,0,.08.37,2,2,0,0,0,.14.37s0,.08,0,.11.1.07.13.12a2.41,2.41,0,0,0,.56.49,1.83,1.83,0,0,0,.24.13,2.28,2.28,0,0,0,1,.23h0c.07,0,.13,0,.2,0l25.15,12.88a2.26,2.26,0,0,0,1.38.71l40.94,21v23L66.53,182.09,133,148.35l0,0,27-13.73h0L256,85.86l92.19,46.94ZM91.15,165.11V128.2l36.34,18.46Zm40.74-20.69L93.36,124.84,116,113.35l38.54,19.57Z" transform="translate(-59.7 -81.72)" />
                    </svg>
                </Link>
            </div>
            <h4>
                Docs
            </h4>
        </header>
    );
}

export default Header;