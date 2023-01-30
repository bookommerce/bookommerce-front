import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
                <Link to={"/home"}>
                    <p>Bookommerce</p>
                </Link>
            </div>
            <div className="header">
                <Link to={"/cart"}>
                    <ion-icon name="bag-handle-outline"></ion-icon>
                </Link>
            </div>
            <Nav active={sideNav} setActive={setSideNav} />
        </HeaderStyle>
    );
}