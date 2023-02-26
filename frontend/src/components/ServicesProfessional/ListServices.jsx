import React, { useState } from "react"
import SimpleText from "../SimpleText/SimpleText"
import { MdFilterAlt } from "react-icons/md"
import PurpleButton from "../PurpleButton"
import Navbar from "../../pages/shared/Navbar/Navbar"
import { CardServices } from "../CardServices"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { onAddFilter } from "../../store/servicesProf/loadServicesSlice"

const ListServices = () => {

    const [showCategories, setShowCategories] = useState(false)
    const dispatch = useDispatch()

    const services = useSelector((state) => state.services.services)
    const serviceIds = services.map((service) => service.id)
    const filters = useSelector((state) => state.services.filters)



    const filterServices = (services, filters) => {
        const { categories, petTypes, sizes } = filters

        const filteredServices = categories.length > 0 ?
            services.filter(service => categories.includes(service.categoryService)) :
            services

        // const petFilteredServices = petTypes.length > 0 ?
        //     filteredServices.filter(service => petTypes.includes(service.petType)) :
        //     filteredServices

        // const sizeFilteredServices = sizes.length > 0 ?
        //     petFilteredServices.filter(service => sizes.includes(service.size)) :
        //     petFilteredServices

        return filteredServices
    }

    const handleShowCategories = () => {
        setShowCategories(!showCategories)
    }

    const handleClick = (categoryService = '', petTypes = '', sizes = '') => {
        if (categoryService != '') {
            dispatch(onAddFilter({ filterType: "categories", filterValue: categoryService }));
        }
        // if (petTypes != '') {
        //     dispatch(onAddFilter({ filterType: "petTypes", filterValue: petTypes }));
        // }
        // if (sizes != '') {
        //     dispatch(onAddFilter({ filterType: "sizes", filterValue: sizes }));
        // }
    }

    return (
        <>
            <Navbar />
            <div className=" flex flex-col mb-8  justify-center items-center">
                <SimpleText title={"Servicios"} />

                <div className="flex flex-row border rounded-xl p-2 w-80 h-9 items-center mb-4">
                    <input type="text" className="flex w-72 h-6" />
                    <button>
                        <MdFilterAlt className="w-6 h-6" />
                    </button>
                </div>

                <PurpleButton text={"Todas las categorias"} />
            </div>

            <div className="flex flex-col p-4 h-48 gap-6">
                {filterServices(services, filters).map((service) => (
                    <CardServices
                        key={service.id}
                        urlImage={service.urlImageService}
                        serviceName={service.nameService}
                    />
                ))}
            </div>

            <button onClick={() => handleClick(["guarderia"])} >CLICK</button>
        </>
    )
}

export default ListServices
