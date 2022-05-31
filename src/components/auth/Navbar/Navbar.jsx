import classes from "./Navbar.css";
const Navbar = () => {
    return ( 
       <nav className="navbar">
           <h1>Trena</h1>
           <div className="links">
                <a href="/Home">home   </a>
                <a href="/create">Profile</a>
                <a href="/create">About Us</a>
                <a href="/create">Contact</a>
           </div>
       </nav>
     );
}
 
export default Navbar;