import React from 'react'

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            MobileSidebar
            <aside className="w-full max-w-[270px] hidden
             lg:black">SideBar</aside>
            <aside className="children">
               {/*<Outlet />*/}
            </aside>
        </div>
    )
}
export default AdminLayout
