import { Appointments, AppointmentsDayView } from '../src/components/Appointments/Appointments'
import ReactDOM from 'react-dom'
import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

let component
let container


const today = new Date();
const appointments = [
    { startsAt: today.setHours(12, 0), customer: { firstName: "Ashley" } },
    { startsAt: today.setHours(13, 0), customer: { firstName: "Jordan" } },
    { startsAt: today.setHours(14, 0), customer: { firstName: "Alice" } },
]

const appointmentLenght = appointments.length
beforeEach(() => {
    container = document.createElement('div')
})

const render = component => ReactDOM.render(component, container)

describe("Appointments", () => {
    it("renders the customer first name", () => {
        const customer = { firstName: "Ashley" }
        render(<Appointments customer={customer} />)
        expect((container.textContent).match("Ashley"))
    })
})

describe("AppointmentsDayView", () => {

    it("renders a div with the right id", () => {

        render(<AppointmentsDayView appointments={appointments} />)
        expect(container.querySelector('div#appointmentsDayView')).not.toBeNull()

    })

    it('initialy shows a message saying there are no appointment', () => {
        render(<AppointmentsDayView appointments={[]} />)
        expect((container.textContent).match('There are no appointments scheduled for today'))
    })

    it('selects the first appointment by default', () => {
        render(<AppointmentsDayView appointments={appointments} />)
        expect((container.textContent).match('Ashley'))
    })
    it("renders multiple appointment in an ol element", () => {

        render(<AppointmentsDayView appointments={appointments} />)
        expect(container.querySelector('ol')).not.toBeNull()
        expect(container.querySelector('ol').children).toHaveLength(appointmentLenght)
    })

    it('renders each appointment in an li', () => {
        render(<AppointmentsDayView appointments={appointments} />);
        expect(container.querySelectorAll('li')).toHaveLength(appointments.length)
        expect(container.querySelectorAll('li')[0].textContent).toEqual('12:00')
        expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00')
        expect(container.querySelectorAll('li')[2].textContent).toEqual('14:00')
    })

    it('has a button element in each li', () => {
        render(<AppointmentsDayView appointments={appointments} />)
        expect(container.querySelectorAll('li > button')).toHaveLength(appointmentLenght)
        expect(container.querySelectorAll('li > button')[0].type).toEqual('button')
    })

    it('renders another appointment when selected', () => {
        render(<AppointmentsDayView appointments={appointments} />)
        const button = container.querySelectorAll('button')[1]
        ReactTestUtils.Simulate.click(button)
        expect(container.textContent).toMatch('Jordan')
    })
})