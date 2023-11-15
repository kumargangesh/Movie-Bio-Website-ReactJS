import React from 'react';
import "./Style.css";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div className="navBarDiv">
        <Link to="/padman"><button>PAD-MAN</button></Link>
        <Link to="/antman"><button>ANT-MAN</button></Link>
        <Link to="/300"><button>300</button></Link>
        <Link to="/mangal"><button>MISSION MANGAL</button></Link>
        <Link to="/dangal"><button>DANGAL</button></Link>
        <Link to="/endgame"><button>ENDGAME</button></Link>
        <Link to="/matrix"><button>MATRIX</button></Link>
        <Link to="/avatar"><button>AVATAR</button></Link>
        <Link to="/strange"><button>STRANGE</button></Link>
        <Link to="/"><button>IRON-MAN</button></Link>
    </div>
  )
}

export default NavBar;
