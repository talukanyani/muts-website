import React, { useEffect } from 'react';
import styles from './LegalInfo.module.css'
import { Link } from 'react-router-dom'
import { SUPPORT_EMAIL } from '../../utils/constants';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PrivacyPage() {
    useEffect(() => {
        document.title = 'Privacy Policy'
    }, [])

    return (
        <>
            <Navbar />
            <div className={styles.body}>
                <h1>Privacy Policy</h1>

                <p>Effective date: 2023-06-01</p>


                <h2>Introduction</h2>

                <p>
                    <b>Muts</b> (“us”, “we”, or “our”) operates <b>muts.dev</b> and <b>Student Calendar</b> ("Service").
                    <br />
                    Our Privacy Policy governs your visit to <b>muts.dev</b> and/or <b>Student Calendar</b>,
                    and explains how we collect, safeguard and disclose information that results from your use of our Service.
                    <br />
                    Our <Link to='/terms' onClick={() => window.scrollTo(0, 0)}>Terms of Use</Link>  governs all use of our Service and together with
                    the Privacy Policy constitutes your agreement with us ("agreement").
                </p>


                <h2>Definitions</h2>

                <dl>
                    <dt>Service</dt>
                    <dd>Muts.dev website and Student Calendar App operated by Muts.</dd>
                    <dt>Personal Data</dt>
                    <dd>
                        Data about a living individual who can be identified from those data
                        (or from those and other information either in our possession or likely to come into our possession).
                    </dd>
                    <dt>Usage Data</dt>
                    <dd>
                        Data collected automatically either generated by the use of Service or from S
                        ervice infrastructure itself (for example, the duration of a page visit).
                    </dd>
                    <dt>Data Controller</dt>
                    <dd>
                        A natural or legal person (either alone or jointly or in common with other persons)
                        who determines the purposes for which and the manner in which any personal data are, or are to be, processed.
                        For the purpose of this Privacy Policy, we are a Data Controller of your data.
                    </dd>
                    <dt>Data Processors (Service Provider)</dt>
                    <dd>
                        Any natural or legal person who processes the data on behalf of the Data Controller.
                        We may use the services of various Service Providers in order to process your data more effectively.
                    </dd>
                    <dt>Data Subject</dt>
                    <dd>
                        Any living individual who is the subject of Personal Data.
                    </dd>
                    <dt>The User</dt>
                    <dd>
                        The individual using our Service. The User corresponds to the Data
                        Subject, who is the subject of Personal Data.
                    </dd>
                </dl>


                <h2>Data Collection</h2>

                <p>
                    While using our Service, we may ask you to provide us with certain personally identifiable information that
                    can be used to contact or identify you. Personally identifiable information may include, but is not limited to:
                    email address and names.
                </p>
                <p>
                    We may also collect information that your browser sends whenever you visit our Service or when you access Service
                    by or through any device. This Usage Data may include information such as your computer's Internet Protocol address
                    (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit,
                    the time spent on those pages, unique device identifiers and other diagnostic data.
                </p>


                <h2>Use of Data</h2>

                <p>Muts uses the collected data for various purposes:</p>

                <ul>
                    <li>To provide and maintain our Service.</li>
                    <li>To notify you about changes to our Service.</li>
                    <li>To gather analysis or valuable information so that we can improve our Service.</li>
                    <li>To monitor the usage of our Service.</li>
                    <li>
                        To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.
                    </li>
                    <li>For any other purpose with your consent.</li>
                </ul>


                <h2>Retention of Data</h2>

                <p>
                    We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.
                    We will retain and use your Personal Data to the extent necessary to comply with our legal obligations
                    (for example, if we are required to retain your data to comply with applicable laws), resolve disputes,
                    and enforce our legal agreements and policies.
                    <br />
                    We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period,
                    except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally
                    obligated to retain this data for longer time periods.
                </p>


                <h2>Transfer of Data</h2>

                <p>
                    Your information, including Personal Data, may be transferred to and maintained on computers located outside of your state,
                    province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
                    <br />
                    If you are located outside South Africa and choose to provide information to us, please note that we transfer the data,
                    including Personal Data, to South Africa and process it there.
                    <br />
                    Muts will take all the steps reasonably necessary to ensure that your data is treated securely and in
                    accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a
                    country unless there are adequate controls in place including the security of your data and other personal information.
                </p>


                <h2>Security of Data</h2>

                <p>
                    The security of your data is important to us but remember that no method of transmission over the Internet or
                    method of electronic storage is 100% secure. We take resonable measures to protect you information from unauthorized
                    access or disclosure.
                </p>


                <h2>Links to Other Sites</h2>

                <p>
                    Our Service may contain links to other sites that are not operated by us.
                    If you click a third party link, you will be directed to that third party's site.
                    We strongly advise you to review the Privacy Policy of every site you visit.
                    We have no control over and assume no responsibility for the content,
                    privacy policies or practices of any third party sites or services.
                </p>


                <h2>Children's Privacy</h2>

                <p>
                    Our Services are not intended for use by children under the age of 18.
                    We do not knowingly collect personally identifiable information from Children under 18.
                    If you become aware that a Child has provided us with Personal Data, please contact us.
                    If we become aware that we have collected Personal Data from Children without verification of parental consent,
                    we take steps to remove that information from our servers.
                </p>


                <h2>Changes to This Privacy Policy</h2>

                <p>
                    We may update our Privacy Policy from time to time.
                    We will let you know by email and/or a prominent notice on our Service,
                    prior to the change becoming effective and update “effective date” at the top of this Privacy Policy.
                    You are advised to review this Privacy Policy periodically for any changes.
                    Changes to this Privacy Policy are effective when they are posted on this page.
                </p>

                <h2>Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us by email:
                    {' '}<a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
                </p>
            </div>
            <Footer />
        </>
    );
}