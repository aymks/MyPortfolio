import "./topbar.scss"
import {PersonOutline,MailOutline,Instagram,WorkOutline} from "@material-ui/icons"

export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")} >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Redoksu.</a>
          <div className="itemContainer">
          <PersonOutline className="icon"/>
          <span></span>
          </div>
          <div className="itemContainer">
          <MailOutline className="icon"/>
          <span></span>
          </div>
          <div className="itemContainer">
          <Instagram className="icon"/>
          <span></span>
          </div>
          <div className="itemContainer">
          <WorkOutline className="icon"/>
          <span></span>
          </div>

        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>

          </div>
        </div>
      </div>
    </div>
  )
  
}

