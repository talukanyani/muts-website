import React from 'react';
import { Route, createRoutesFromElements, redirect } from 'react-router-dom';

import Home from './pages/home/Home';
import StudentCalendar from './pages/student_calendar/StudentCalendar';
import Contact from './pages/contact/Contact'
import Terms from './pages/legal_info/Terms';
import Privacy from './pages/legal_info/Privacy';
import PageNotFound from './pages/error/PageNotFound';

import { SC_PLAY_STORE_LINK } from './utils/constants';

var userAgent = navigator.userAgent;

export const routes = createRoutesFromElements(
    <Route path='/'>
        <Route index element={<Home />} />
        <Route path='student_calendar'>
            <Route index element={<StudentCalendar />} />
            <Route
                path='download'
                loader={() => {
                    if (userAgent.match(/Android/i)) {
                        return redirect(SC_PLAY_STORE_LINK);
                        // } else if (userAgent.match(/iOS/i)) {
                        //     return redirect(SC_APP_STORE_LINK);
                    } else {
                        return redirect('/student_calendar');
                    }
                }}
            />
        </Route>
        <Route path='contact' element={<Contact />} />
        <Route path='terms' element={<Terms />} />
        <Route path='privacy' element={<Privacy />} />
        <Route path='*' element={<PageNotFound />} />
    </Route>
)