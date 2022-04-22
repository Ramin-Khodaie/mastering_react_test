import { Appointments, AppointmentsDayView } from '../src/components/Appointments/Appointments'
import ReactDOM from 'react-dom'
import React from 'react'


let component
let container

const today = new Date();
const appointments = [
    { startsAt: today.setHours(12, 0) },
    { startsAt: today.setHours(13, 0) },
    { startsAt: today.setHours(14, 0) },
]
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
        expect(container.textContent).match('There are no appointments scheduled for today')
    })

    it("renders multiple appointment in an ol element", () => {

        render(<AppointmentsDayView appointments={appointments} />)
        expect(container.querySelector('ol')).not.toBeNull()
        expect(container.querySelector('ol').children).toHaveLength(appointments.length)
    })

    it('renders each appointment in an li', () => {
        render(<AppointmentsDayView appointments={appointments} />);
        expect(container.querySelectorAll('li')).toHaveLength(appointments.length)
        expect(container.querySelectorAll('li')[0].textContent).toEqual('12:00')
        expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00')
        expect(container.querySelectorAll('li')[2].textContent).toEqual('14:00')
    })

})