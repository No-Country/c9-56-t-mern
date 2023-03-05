import React from "react"

const RadioButtonContainer = ({ label, children }) => {
  return (
    <form className="flex flex-col justify-center m-auto w-full max-w-sm px-4">
      <div className="font-body text-body-bold m-1">
        <p>{label}</p>
      </div>
      <div className="flex flex-row flex-wrap w-full self-center">
        {children}
      </div>
    </form>
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
