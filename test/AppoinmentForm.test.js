import React from "react";

import AppointmentForm from "../src/components/AppointmentForm/AppointmentForm";
import { createContainer } from '../test/domManipulators.test'

describe('AppointmentForm ', () => {

    let render, container;

    beforeEach(() => {
        return { container, render } = createContainer()
    })

    const form = id => container.querySelector(`form[id="${id}"]`)
    it('renders a form ', () => {
        render(<AppointmentForm />)
        expect(form('appointment')).not.toBeNull()
    })

    const field = name => form('appointment').elements[name]
    const findOption = (dropDownNode, textContent) => {
        const options = Array.from(dropDownNode.childNodes)
        return options.find(option => option.textContent === textContent)
    }

    describe('service field', () => {

        it('pre-selecting the existing value',()=>{
            const selectableServices = ['Cut', 'Blow-dry']
            render(<AppointmentForm services={selectableServices} service='Blow-dry'/>)
            const option = findOption(field('service'), 'Blow-dry')
            expect(option.selected).toBeTruthy()
        })
        it('render as a select box', () => {
            render(<AppointmentForm />)
            expect(field('service')).not.toBeNull();
            expect(field('service').tagName).toEqual("SELECT")
        })

        // it('initially has a blank value chosen', () => {
        //     render(<AppointmentForm />)
        //     const firstNode = field('service').childNodes[0];
        //     expect(firstNode.value).toEqual('');
        //     expect(firstNode.selected).toBeTruthy()
        // })

        it('lists all salon services', () => {
            const selectableServices = ['Cut', 'Blow-dry']
            render(<AppointmentForm services={selectableServices} />)
            const optionNodes = Array.from(field('service').childNodes)
            const renderedServices = optionNodes.map((node) => node.textContent)
            expect(renderedServices).toEqual(expect.arrayContaining(selectableServices))
        })

    })
})