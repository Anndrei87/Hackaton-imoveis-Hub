import React from 'react'
import {FormContainer, FormH1} from './FormStyle'
import Navbar from '../Navbar/index'
import { useState } from 'react'
import { PostForm } from '../../Service/PostUsuarioForm'
// import{ useHistory} from 'react-router-dom'


const FormUser = ()=>{

     const initialCadastroState = {
         nome: "",
         sobrenome: "",
         email: "",
         senha:"",
         telefone:""
      };

    const [input, setInput] = useState(initialCadastroState)
    // const history = useHistory();

    const handleInputChange = (event) =>{
        
        const {name, value} = event.target;
            setInput({ ...input, [name]: value });
            
    }
    
    const teste = (e) =>{
        e.preventDefault();
        PostForm({
                    name: input.nome,
                    sobrenome: input.sobrenome,
                    email: input.email,
                    senha:input.senha,
                    telefone:input.telefone
            });
        
    }
   

    return (
        <>
        <Navbar/>
        <FormH1>Cadastro de Usuário</FormH1>
       <FormContainer>
           <form onSubmit={teste} >
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" className="form-control" id="name"  name="nome" placeholder="Insira o seu nome" onChange={handleInputChange} required />
                    
                </div>

                <div className="form-group">
                    <label htmlFor="sobrenome">Sobrenome:</label>
                    <input type="text" className="form-control" id="sobrenome" name="sobrenome" placeholder="Insira o seu sobrenome" onChange={handleInputChange} required/>
                    
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Insira o seu email" onChange={handleInputChange} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="telefone">Telefone</label>
                    <input type="number" className="form-control" id="telefone" name="telefone"  placeholder="Insira o seu telefone" onChange={handleInputChange} required />
                    
                </div>

                <div className="form-group">
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" className="form-control" name="senha" id="senha" placeholder="Insira a sua senha" onChange={handleInputChange} required/>
                </div>

                <button type="submit" className="btn btn-primary ">Cadastrar</button>
            </form>
            
       </FormContainer>
        
        </>
    )
}

export default FormUser