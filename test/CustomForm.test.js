import React from "react";
import { createContainer } from './domManipulators.test'
import CustomForm from "../src/CustomForm/CustomForm";
import ReactTestUtils from 'react-dom/test-utils'

describe('CustomForm', () => {
        
    let render, container;

    beforeEach(() => {

        //return render and container in this way :))
        ({ render, container } = createContainer())
    })

    const form = id => container.querySelector(`form[id="${id}"]`)

    const labelFor = formElement => container.querySelector(`label[for="${formElement}"]`)

    const field = (name) => form('customer').elements[name]

    const expectToBeInputFieldOfTypeText = formElement => {
        expect(formElement).not.toBeNull();
        expect(formElement.tagName).toEqual('INPUT');
        expect(formElement.type).toEqual('text')
    }
    const itRendersAsATextBox =(fieldName)=>
    it('renders as a text box', ()=>{
        render(<CustomForm/>)
        expectToBeInputFieldOfTypeText(field(fieldName))
    })
const itRendersAForm = (id) =>{        
    it('renders a form', () => {
        render(<CustomForm />)
        expect(form(id)).not.toBeNull()
    })
}

const itIncludesTheExistingValues = (firstname) =>{

    it('includes the existing value for the first name', () => {
        render(<CustomForm firstName={firstname} />)
        expect(field(firstname).value).toEqual(firstname)
    })
}
const itRendersALabel = (fieldName, value) =>{
    it('renders a label for ther first name field', () => {
        render(<CustomForm />)
        expect(labelFor(fieldName)).not.toBeNull()
        expect(labelFor(fieldName).textContent).toEqual(value)
    })
}
const itSubmitsNewValue = async (fieldName, value)=>{
    expect.hasAssertions();
    render(<CustomForm firstName={fieldName} onSubmit={(props)=>expect(props[fieldName]).toEqual(value)}/>)
    await ReactTestUtils.Simulate.change(field(fieldName), {target:value})
    await ReactTestUtils.Simulate.submit(form('cutomer'))
}
const itAssignsAnIdThatMatchesTheLabelId =(fieldName)=>{
    it('assigns an id that matches the label id to the first name', () => {
        render(<CustomForm />)
        expect(field(fieldName).id).toEqual(fieldName)
    })
}
itRendersAsATextBox('firstName')  
    describe('first name field', ()=>{
    
        itRendersAsATextBox('firstName')    
        itRendersAForm('customer')
        itIncludesTheExistingValues('firstName')
        itRendersALabel('firstName', 'First Name')
        itSubmitsNewValue('firstName', 'firstName')
        itAssignsAnIdThatMatchesTheLabelId('firstName')
    })
    
    describe('last name field', ()=>{
        itRendersAsATextBox('lastName')
    })
    

  

    
    // it('saves existing first name when submitted', async () => {
    //     expect.hasAssertions()
    //     render(
    //         <CustomForm firstName="Ashley"
    //             onSubmit={(firstname) => {
    //                 expect(firstname).toEqual('Ashley')
    //             }} />
    //     )
    //     await ReactTestUtils.Simulate.change(field('firstName'), {
    //         target: { value: 'Ashley' }
    //     })
    //     await ReactTestUtils.Simulate.submit(form('customer'))
    // })


})