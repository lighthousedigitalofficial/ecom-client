// import Topbar from "./Topbar";
import NavbarSticky from './NavbarSticky'
import BottomNavbar from './BottomNavbar'

const Header = () => {
    return (
        <div className="py-1 bg-white">
            {/* <Topbar /> */}
            <NavbarSticky />
            <BottomNavbar />
        </div>
    )
}

export default Header
