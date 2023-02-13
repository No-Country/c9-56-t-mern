import React from 'react';

const CategoriesHome = () => {
    let categoryDetails = [{
        category: 'Category1',
        categoryDescription:'Descripción de la categoría explicativa max 2 renglones'

    },
    {
        category: 'Category2',
        categoryDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit eos' 

    }
]
    return (
        <div>
            <div className="flex">
                {/* div imagen cat */}
                <div className="flex justify-center items-center w-99 h-99 bg-gray-500">

                </div>
                {/* div categoriaName y text */}
                {   
                categoryDetails.map(cattegory => (
                    <div>
                    <h3>{cattegory.category}</h3>
                    <p>{cattegory.categoryDescription}
                    </p></div>
                    
                ))
            
        }
                
            </div>
        </div>
    );
};

export default CategoriesHome;