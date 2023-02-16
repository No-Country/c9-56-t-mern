import React from 'react';

const CategoriesHome = () => {
    let categoryDetails = [{
        category: 'Peluquería',
        categoryDescription: 'Servicios de baño, corte y estéticos para perros y gatos.'

    },
    {
        category: 'Guardería',
        categoryDescription: 'Espacios de cuidado para tu animal de compañía.'

    },
    {
        category: 'Pastelería',
        categoryDescription: 'Catering para fiestas, pasteles, tortas y bocados.'

    },
    {
        category: 'Fiestas',
        categoryDescription: 'Organización de eventos, decoración y animación.'

    },
    {
        category: 'Paseo',
        categoryDescription: 'Salidas por hora en grupo o solitario.'

    }
    ]
    return (
        <div className="max-w-sm mt-5 mx-auto p-6 rounded-lg flex flex-col items-center">
        <div className="flex">
            {/* div imagen cat */}
            <div className="flex justify-center items-center w-99 h-99 bg-gray-500">

            </div>
            {/* div categoriaName y text */}
            {
                categoryDetails.map(categories => (

                    <div className="flex justify-center">
  <div className="max-w-sm mx-4 my-4 h-32 px-2 py-4 bg-gray-50 drop-shadow-md rounded-2xl flex justify-around items-center text-center text-neutral-900">
    <div className="bg-gray-500 w-24 h-24 rounded-full">
      {/* <img src={image} alt='service' className='object-cover w-full h-full rounded-full' /> */}
    </div>
    <div className="w-56 h-20">
      <h2 className="text-2xl font-semibold">{categories.category}</h2>
      <p className="text-base font-normal">{categories.categoryDescription}
        Servicios de baño, corte y estéticos para perros y gatos.
      </p>
    </div>
  </div>
</div>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoriesHome;
