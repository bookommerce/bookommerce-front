import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { api } from "../../services/api";
import NavLink from "./NavLink";
import { BlackPanel, NavStyle } from "./NavStyles";

export default function Nav({ active, setActive }) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        api.get("/categories")
            .then(res => {
                setCategories(res.data);
                setLoading(false);
            })
            .catch(res => {
                console.log(res);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <NavStyle active={active}>
                <p>Olá, Fulano</p>
                <div>
                    <NavLink to="/home" text="Home" setActive={setActive} />
                    <NavLink to="/carrinho" text="Carrinho" setActive={setActive} />
                </div>
                <div>
                    {
                        loading ?
                            <ThreeDots
                                height="60"
                                width="60"
                                radius="9"
                                color="#2A254B"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            /> :
                            <>
                                <NavLink to="/category/" text="Mais Curtidos" setActive={setActive} />
                                {categories.map((c, i) =>
                                    <NavLink key={i} to={`/category/${c}`} text={c} setActive={setActive} />
                                )}
                            </>
                    }

                </div>

            </NavStyle>
            <BlackPanel onClick={() => setActive(false)} active={active} ></BlackPanel>
        </>

    );
}