import { useNavigate } from "react-router-dom"

export function Butons({text, to}) {
    const navigate = useNavigate();
    return (
        <section>
            
            <button onClick={() => navigate(to)} className="btn">{text}</button>
            
        </section>
    )
}