import React from 'react';

const CategoriesHome = () => {
    let categoryDetails = [{
        category: 'Peluquería',
        categoryDescription:'Servicios de baño, corte y estéticos para perros y gatos.'

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
                    <div className="w-full flex flex-col items-center">
            
                    <button id='cardCategory' className="bg-white rounded-lg shadow-md flex m-6 overflow-hidden w-80 h-48">
                    <div className="p-8 max-w-10 flex flex-col items-center justify-between">
				<h2>Sector imagen</h2>
			</div>
            <div id="right-column" className="py-8 w-full flex flex-col items-start justify-between">

                    <h3 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{categories.category}</h3>
                    <p className="mt-2 text-gray-500">{categories.categoryDescription}
                    </p>
                    </div>

                    </button>
                    </div>


                ))
            
        }
                
            </div>
        </div>
    );
};

export default CategoriesHome;
