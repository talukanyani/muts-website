import React from 'react';
import { Route, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/home/Home';
import StudentCalendar from './pages/student_calendar/StudentCalendar';
import Contact from './pages/contact/Contact'
import Terms from './pages/legal_info/Terms';
import Privacy from './pages/legal_info/Privacy';
import PageNotFound from './pages/error/PageNotFound';
import { sendMessage, sendEmail } from './services/api';

export const routes = createRoutesFromElements(
    <Route path='/'>
        <Route
            index
            element={<Home />}
        />
        <Route
            path='student_calendar'
            element={<StudentCalendar />}
        />
        <Route
            path='contact'
            element={<Contact />}
            action={async ({ request }) => {
                let messageData = await request.formData()
                let res = sendMessage(
                    messageData.get('name'),
                    messageData.get('email'),
                    messageData.get('message'),
                )

                return res
            }}
        />
        <Route
            path='/api/mailing_list_ios_app'
            action={async ({ request }) => {
                let formData = await request.formData()
                let res = sendEmail(formData.get('email'))

                return res
            }}
        />

        <Route
            path='terms'
            element={<Terms />}
        />
        <Route
            path='privacy'
            element={<Privacy />}
        />
        <Route
            path='*'
            element={<PageNotFound />}
        />
    </Route>
)