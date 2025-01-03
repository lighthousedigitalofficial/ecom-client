// import Topbar from "./Topbar";
import NavbarSticky from './NavbarSticky'
import BottomNavbar from './BottomNavbar'

const Header = () => {
    return (
        <div className="pt-2 bg-primary-500 pb-0">
            {/* <Topbar /> */}
            <NavbarSticky />
            {/* <BottomNavbar /> */}
        </div>
    )
}

export default Header
