import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
    const initialValues = {
        name: '',
        description: '',
        color: '',
    }

    const [categories, setCategories] = useState([]);
    const [values, setValues]= useState(initialValues);

    function setValue (key, value) {
        // key: name, description, etc
        setValues ({
            ...values,
            [key]: value, // name: 'value'
        })
    }

    function handleChange(event) {
        setValue(
            event.target.getAttribute('name'), 
            event.target.value
        );
    }

    useEffect(() => {
        const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://lyllyflix.herokuapp.com/categorias';

        fetch(URL)
            .then(async (serverResponse) => {
                const response = await serverResponse.json();
                setCategories ([
                    ...response,
                ]);
            });
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.name} </h1>

            <form onSubmit={function handleSubmit(event) {
                event.preventDefault();
                setCategories([
                    ...categories,
                    values
                ]);

                setValues(initialValues)
            }}>
           
           <FormField 
               label="Nome da Categoria"
               type="text"
               name="name"
               value={values.name}
               onChange={handleChange}
           />

           <FormField 
               label="Descrição"
               type="textarea"
               name="description"
               value={values.description}
               onChange={handleChange}
           />

            <FormField
                label="Cor"
                type="color"
                name="color" 
                value={values.color}
                onChange={handleChange}
            />

                <Button>Cadastrar</Button>
            </form>
            
            {categories.length === 0 && (
                <div>
                    Loading...
                </div>
            )}

            <ul>
                {categories.map((category) => {
                    return (
                        <li key={`${category.nome}`}>
                            {category.nome}
                        </li>
                    )
                })}
            </ul>


            <Link to="/">
                Ir pra home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;