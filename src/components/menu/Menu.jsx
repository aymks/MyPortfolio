import "./menu.scss"

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul >
            <li className="hover-underline-animation" onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li className="hover-underline-animation" onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li className="hover-underline-animation" onClick={()=>setMenuOpen(false)}>
                <a href="#works">Works</a>
            </li >
            <li className="hover-underline-animation" onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    
    
    </div>
  )
}
