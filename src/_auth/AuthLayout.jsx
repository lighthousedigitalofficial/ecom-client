import { Outlet } from 'react-router-dom'

import logo from './../assets/app-logo/app-logo.png'

const AuthLayout = () => {
    return (
        <div className="">
            <div className="my-4 p-4 flex justify-between items-center flex-col">
                <img
                    src={logo}
                    alt="vistamart"
                    className="w-40 h-40 object-contain"
                />
                <div className="p-4 w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
