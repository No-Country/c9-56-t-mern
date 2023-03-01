import React from 'react';
import Navbar from '../../../shared/Navbar/Navbar';
import ListServices from "../../../../components/ServicesProfessional/ListServices"
import FilterServices from '../../../../components/ServicesProfessional/FilterServices';
import ServicesPanel from '../../../../components/ServicesPanel';
import Footer from '../../../shared/Footer/Footer';

const PetServices = () => {
  return (
    <div>
      <ListServices/>
      <FilterServices/>
      {/* <ServicesPanel/> */}
      {/* <Footer/> */}
    </div>
  );
};

export default PetServices;