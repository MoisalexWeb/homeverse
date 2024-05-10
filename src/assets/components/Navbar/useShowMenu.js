import { useState, useEffect } from "react"

const useShowMenu = () => {
    const [activeMenu, setActiveMenu] = useState(false)

    const showMenu = () => setActiveMenu(true)

    const hideMenu = () => setActiveMenu(false)


    useEffect(() => {
        const defaultMenu = () => {
            if (!activeMenu) return 
            if (window.innerWidth >= 1024) hideMenu()
        }

        window.addEventListener("resize", defaultMenu)

        return (() => {
            window.removeEventListener("resize", defaultMenu)
        })
    }, [])


    return {
        activeMenu,
        showMenu,
        hideMenu
    }
}


export default useShowMenu