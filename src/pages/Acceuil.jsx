import { Butons } from "../composants/Butons";
import ActRembimg from "../assets/actrembimg.jpeg"

function Acceuil () {
    return (
        
        <section >
            
            <div className="hook">
                <h1>Bienvenue sur <strong>Irechargee</strong></h1>
                <h3>Votre plateforme de recharge en ligne</h3>
                <p>Irechargee vous permet de activer ou de demander un remboursement de votre recharge  et celui de vos proches facilement, où que vous soyez, vous permettant de gérer votre compte en toute simplicité et en tout sécurité.</p>
                <img src={ActRembimg} alt="ActRembimg" className="ActRembimg"/>
                <div className="btns">
                    <div>
                      <Butons text="ACTIVATION" to="/Activation"/>
                    </div>
                    <div>
                      <Butons text="REMBOURSEMENT" to="/Remboursement"/>
                    </div>
                </div>
            </div>
        
        </section>
    )
}
export default Acceuil;