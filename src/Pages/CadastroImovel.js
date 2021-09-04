import React from 'react';
import Navbar from '../Components/Navbar/index';
import CadastroImovel from '../Components/FormImovel/index';
import Sidebar from '../Components/Sidebar/index';
import { useState } from 'react';

const FormImovel = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar  toggle={toggle}/>
            <CadastroImovel/>
        </>
    )
}


export default FormImovel