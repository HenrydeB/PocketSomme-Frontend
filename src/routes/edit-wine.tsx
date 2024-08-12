import React, { useState } from 'react';
import { WineFormFields } from '../types/wine-types';
import FormInput from "../components/form-input";

const defaultFormFields: Record<WineFormFields, string> = {
    name: '',
    vintage: '',
    country: '',
    region: '',
    alcohol: '',
    style: '',
    varietals: '',
}


const EditWine: React.FC = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {name, vintage, country, region, alcohol, style, varietals} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try{
      //submit
      resetFormFields();
    } catch(ex){

    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target as HTMLInputElement;
    setFormFields({...formFields, [name]: value});
  }

  return (
    <div className="flex justify-center mr-16 p-4">
      <div className="edit-wine-container font-default flex flex-col items-center">
          <h2 className="font-default text-2xl pb-4">Add a new wine</h2>
          <form onSubmit={handleSubmit}>
            <FormInput label='Name' type='text' required onChange={handleChange} name='name' value={name}/>

            <FormInput label='Vintage Year' type='text' onChange={handleChange} name='vintage year' value={vintage}/>

            <FormInput label='Country' type='text' onChange={handleChange} name='country' value={country}/>

            <FormInput label='Region' type='text' onChange={handleChange} name='region' value={region}/>
            
            <FormInput label='Alcohol' type='text' onChange={handleChange} name='alcohol' value={alcohol}/>

            <FormInput label='Style' type='text' onChange={handleChange} name='style' value={style}/>
            
            <FormInput label='Varietals' type='text' onChange={handleChange} name='varietals' value={varietals}/>
          </form>
      </div>
    </div>
  )
}

export default EditWine