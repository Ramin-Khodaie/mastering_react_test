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
    const firstNameFields = () => form('customer').elements.firstName
    const expectToBeInputFieldOfTypeText = formElement => {
        expect(formElement).not.toBeNull();
        expect(formElement.tagName).toEqual('INPUT');
        expect(formElement.type).toEqual('text')
    }

    describe('first name field', ()=>{
        it('renders as a text box', () => {
            render(<CustomForm />)
            expectToBeInputFieldOfTypeText(firstNameFields())
        })
    })

    it('renders a form', () => {
        render(<CustomForm />)
        expect(container.querySelector('form[id="customer"]')).not.toBeNull()
    })

    //group expectation about input test 

    

    it('includes the existing value for the first name', () => {
        render(<CustomForm firstName={"Ashley"} />)
        expect(firstNameFields().value).toEqual('Ashley')
    })

    it('renders a label for ther first name field', () => {
        render(<CustomForm />)
        expect(labelFor('firstName')).not.toBeNull()
        expect(labelFor('firstName').textContent).toEqual('First Name')
    })

    it('assigns an id that matches the label id to the first name', () => {
        render(<CustomForm />)
        expect(firstNameFields().id).toEqual("firstName")
    })

    it('saves existing first name when submitted', async () => {
        expect.hasAssertions()
        render(
            <CustomForm firstName="Ashley"
                onSubmit={(firstname) => {
                    expect(firstname).toEqual('Ashley')
                }} />
        )
        await ReactTestUtils.Simulate.change(firstNameFields(), {
            target: { value: 'Ashley' }
        })
        await ReactTestUtils.Simulate.submit(form('customer'))
    })


})