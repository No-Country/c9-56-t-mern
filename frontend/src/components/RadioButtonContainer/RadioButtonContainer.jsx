import React from "react"

const RadioButtonContainer = ({ label, children }) => {
  return (
    <div className="flex flex-col m-auto max-w-sm">
      <div className="font-normal text-base m-1">
        <p className="font-semibold">{label}</p>
      </div>
      <div className="flex flex-row flex-wrap w-80">{children}</div>
    </div>
  )
}

export default RadioButtonContainer

//ejemplo de uso
{
  /* <div>
<RadioButtonContainer label={"Tipo de mascota"}>
  <RadioButton title={"Perro"} desc={""} />
  <RadioButton title={"Gato"} desc={""} />
</RadioButtonContainer>
<br /><br />
<RadioButtonContainer label={"¿Qué tamaño tiene tu mascota?"}>
  <RadioButton title={"Chico"} desc={"hasta 10kg"} />
  <RadioButton title={"Mediano"} desc={"11 - 20kg"} />
  <RadioButton title={"Grande"} desc={"21 - 40kg"} />
  <RadioButton title={"Muy grande"} desc={"más de 40"} />
</RadioButtonContainer>
</div> */
}
