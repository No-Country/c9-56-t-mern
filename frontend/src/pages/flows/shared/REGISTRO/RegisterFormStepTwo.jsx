import React from "react";
// recibe el estado y el seteo del estado 
// por props (formData y setFormData)
function RegisterFormStepTwo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
     
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
    </div>
  );
}

export default RegisterFormStepTwo;
