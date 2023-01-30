import { Link } from "react-router-dom";

export default function NavLink({ to, text, setActive }) {
    return (
        <Link to={to} onClick={() => setActive(false)}>
            {text}
            <ion-icon name="chevron-forward-outline"></ion-icon>
        </Link>
    );
}