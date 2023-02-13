import React from 'react';
import CategoriesHome from './CategoriesHome';

const HomePage = () => {
    
    return (
        <div >
            <div className="absolute w-32 h-12 left-0 top-0 text-center font-medium text-2xl leading-tight text-black">
                <h1>Lorem ipsum
                    dolor sit
                    amet</h1>
            </div>
            {/* texto mas chico */}
            <div className="absolute w-115 h-120 left-16 top-245 text-black text-lg font-normal">
                Lorem Ipsum is
                simply dummy
                text.</div>
            {/* Circulo grande */}
            <div className="absolute w-305 h-305 left-143 top-112 bg-gray-500">
                x
                {/* circulo chico */}
                <div className="w-64 h-64 bg-gray-200 absolute left-64 top-64 ">
                    x </div>
                <button className="flex flex-row justify-center items-center p-12 px-24 gap-10">
                    CONOCER SERVICIOS
                </button>
                <br />
                <button className="flex flex-row items-center justify-center p-6 gap-2 bg-gray-500 border-2 border-black rounded-md">
                    SER PROFESIONAL
                </button>
            </div>
            <div>
                <h2>Categorias Profesionales</h2>
                <CategoriesHome
                NumCategoria={1}/>
                <CategoriesHome
                NumCategoria={2}/>
                <CategoriesHome
                NumCategoria={3}/>
            </div>


        </div>
    );
};

export default HomePage;