import React from 'react'
import styles from './Description.module.css'
import scHomeScreen from '../../../assets/images/sc_home_screen.png'

export default function B() {
    return (
        <div className={styles.description}>
            <div className={styles.phone}>
                <img
                    alt='Student Calendar home screen'
                    src={scHomeScreen}
                />
            </div>
            <div className={styles.content}>
                <section >
                    <h2>An efficient app</h2>
                    <p>
                        A powerful app developed to revolutionise the way students
                        manage their assessments and activities.
                    </p>
                </section>
                <section>
                    <h2>User-friendly interface</h2>
                    <p>
                        Student Calendar simplifies the process of organising, tracking,
                        and prioritising tasks.<br />
                        Seamlessly integrate your assessments, exams, project due dates,
                        and extracurricular activities all in one place.
                    </p>
                </section>
                <section>
                    <h2>Digital Calendar</h2>
                    <p>
                        Visualise your academic schedule in an intuitive calendar view.
                        Stop scratching your calendar or juggling multiple planners and notebooks.
                    </p>
                </section>
                <section>
                    <h2>Not just a calendar</h2>
                    <p>
                        More and more tools to help you stay organised.
                    </p>
                </section>
            </div>
        </div>
    )
}