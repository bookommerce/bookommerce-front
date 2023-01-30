import { useEffect, useState } from "react";
import { HeaderStyle } from "./HeaderStyles";
import Nav from "./Nav";

export default function Header() {
    const [sideNav, setSideNav] = useState(false);

    useEffect(() => {
        document.documentElement.style.overflowY = sideNav ? "hidden" : "auto";
    }, [sideNav]);

    return (
        <HeaderStyle>
            <div className="header">
                <ion-icon name="reorder-four-outline" onClick={() => setSideNav(true)}></ion-icon>
                <p>Bookommerce</p>
            </div>
            <div className="header">
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="bag-handle-outline"></ion-icon>
            </div>
            <Nav active={sideNav} setActive={setSideNav} />
        </HeaderStyle>
    );
}