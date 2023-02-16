import React from 'react';
import CategoriesHome from './CategoriesHome';
import SecondaryBtn from '../SecondaryBtn/SecondaryBtn';

const HomePage = () => {

    return (
        <div className="flex flex-col items-center p-4">
            <div >
                <div id='homeTitle' className="flex m-6 overflow-hidden w-56 h-40">
                    <h2 className="flex m-6 overflow-hidden w-56 h-40"> Conectá con expertos para el cuidado de tus mascotas 
                    </h2>
                </div>
            </div>
            <div id='homeMainImage' className="flex m-6 overflow-hidden w-56 h-40">
                <img className="w-full h-full object-cover rounded-full bg-gray-500" />
            </div>
            <div >
            </div>
            <button className="bg-black text-white py-3 px-6 rounded-lg sm:py-4 sm:px-8 sm:rounded-xl">
                CONOCER SERVICIOS
            </button>
            <br />
            <SecondaryBtn 
            text={'SER PROFESIONAL'}
            />
            {/* <button className="bg-black text-white py-3 px-6 rounded-lg sm:py-4 sm:px-8 sm:rounded-xl">
                SER PROFESIONAL
            </button> */}
            <br />
            <h2 className="font-poppins font-semibold text-2xl leading-8 text-center">Nuestros servicios</h2>

            <div className="flex flex-col justify-center items-center w-80 mx-auto overflow-x-scroll">
                <CategoriesHome />
            </div>
        </div>
    );
};

export default HomePage;
