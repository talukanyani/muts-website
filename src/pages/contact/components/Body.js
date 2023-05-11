import React from 'react';
import styles from './Body.module.css'
import { useFetcher } from 'react-router-dom';
import FilledButton from '../../../components/FilledButton'
import emailIcon from '../../../assets/icons/letter.svg'
import LoadingIndicator from '../../../components/LoadingIndicator';
import { Success, Error } from '../../../components/PostResponse';


export default function Body() {
    let fetcher = useFetcher()

    const isLoading = fetcher.state !== 'idle'

    const res = fetcher.data

    const isSent = res && res.ok
    const isError = res && !res.ok

    return (
        <div className={styles.body}>
            <div>
                <h1>Contact Us</h1>
                <div>
                    <div className={styles.email}>
                        <img alt='email icon' src={emailIcon} />
                        <section>
                            <h2>Email Us</h2>
                            <a href="mailto:tmlab.tech@outlook.com">
                                tmlab.tech@outlook.com
                            </a>
                        </section>
                    </div>
                    <div className={styles.message}>
                        <h2>Send Us A Message</h2>
                        {isLoading ? <LoadingIndicator
                            message='Please Wait while we send your message...'
                        />
                            : isSent ? <Success
                                title='Successfully Sent'
                                message="We received your message, we'll get back to you shortly"
                            />
                                : isError ? <Error
                                    message='An error occured while sending your message.'
                                    onTryAgain={() => window.location.reload()}
                                />
                                    : <fetcher.Form method='post'>
                                        <section>
                                            <input
                                                type='text'
                                                name='name'
                                                placeholder=' '
                                                id='name'
                                            />
                                            <label htmlFor='name'>Name</label>
                                        </section>
                                        <section>
                                            <input
                                                type='email'
                                                name='email'
                                                placeholder=' '
                                                id='email'
                                            />
                                            <label htmlFor='email'>Email</label>
                                        </section>
                                        <section>
                                            <textarea
                                                name='message'
                                                rows='6'
                                                placeholder=' '
                                                id='message'
                                            ></textarea>
                                            <label htmlFor='message'>
                                                Message
                                                {/* {!message &&
                                <span>{message.length} / 250</span>
                            } */}
                                            </label>
                                        </section>
                                        <FilledButton type='submit'>Send</FilledButton>
                                    </fetcher.Form>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}

