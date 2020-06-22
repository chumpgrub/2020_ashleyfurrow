import React, {Fragment, useState} from 'react'
// import gql from 'graphql-tag'
// import {Mutation} from 'react-apollo'

import styles from './ContactForm.module.css'

// const CONTACT_MUTATION = gql`
//     mutation CreateSubmissionMutation($clientMutationId: String!, $name: String!, $email: String!, $interest: String!, $message: String!) {
//         createSubmission(input: {clientMutationId: $clientMutationId, name: $name, email: $email, interest: $interest, message: $message}) {
//             success
//             data
//         }
//     }
// `

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const ContactForm = () => {

    const [messageSent, setMessageSentValue] = useState(false)
    const [nameValue, setNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [interestValue, setInterestValue] = useState('')
    const [messageValue, setMessageValue] = useState('')

    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [interestError, setInterestError] = useState(false)
    const [messageError, setMessageError] = useState(false)

    const [errors, setErrors] = useState({name: false, email: false, interest: false, message: false})

    const checkSubmitValues = (values) => {

    }

    return (
        <Fragment>
            <form
                className={styles.form}
                style={{
                    display: messageSent ? 'none' : 'block',
                    backgroundColor: messageSent ? 'green' : 'transparent'
                }}
                onSubmit={async event => {
                    event.preventDefault()

                    let validated = true

                    Object.keys(errors).forEach((key, index) => {
                        if (!errors[key]) {
                            switch (key) {
                                case 'name':
                                    setNameError(true)
                                    validated = false
                                    break;
                                case 'email':
                                    setEmailError(true)
                                    validated = false
                                    break;
                                case 'interest':
                                    setInterestError(true)
                                    validated = false
                                    break;
                                case 'message':
                                    setMessageError(true)
                                    validated = false
                                    break;
                            }
                        }
                    })

                    if (validated) {
                    }

                }}
            >
                <div className={`formGroup ${styles.formGroup} ${nameError ? 'error' : ''}`}>
                    <label className={styles.label} htmlFor="nameInput">Name <span className={styles.required}>*</span></label>
                    <input id="nameInput"
                           className={styles.inputBase}
                           value={nameValue}
                           onChange={event => {
                               setNameValue(event.target.value)
                           }}
                           onBlur={event => {
                               const value = event.target.value
                               if (value.trim().length === 0) {
                                   setNameError(true)
                                   setErrors({...errors, name: false})
                               } else {
                                   setNameError(false)
                                   setErrors({...errors, name: true})
                               }
                           }}
                    />
                    <small className={`requiredHelpText ${styles.required} ${nameError ? 'show' : 'hidden'}`}>Please
                        provide your name.
                    </small>
                </div>
                <div className={`formGroup ${styles.formGroup} ${emailError ? 'error' : ''}`}>
                    <label className={styles.label} htmlFor="emailInput">Email <span
                        className={styles.required}>*</span></label>
                    <input id="emailInput"
                           className={styles.inputBase}
                           value={emailValue}
                           onChange={event => {
                               setEmailValue(event.target.value)
                           }}
                           onBlur={event => {
                               if (!validateEmail(event.target.value)) {
                                   setEmailError(true)
                                   setErrors({...errors, email: false})
                               } else {
                                   setEmailError(false)
                                   setErrors({...errors, email: true})
                               }
                           }}
                    />
                    <small className={`requiredHelpText ${styles.required} ${emailError ? 'show' : 'hidden'}`}>Please
                        check your email address.
                    </small>
                </div>

                <div className={`formGroup ${styles.formGroup} ${interestError ? 'error' : ''}`}>
                    <label className={styles.label} htmlFor="interestInput">Interest <span
                        className={styles.required}>*</span></label>
                    <input id="interestInput"
                           className={styles.inputBase}
                           value={interestValue}
                           onChange={event => {
                               setInterestValue(event.target.value)
                           }}
                           onBlur={event => {
                               const value = event.target.value
                               if (value.trim().length === 0) {
                                   setInterestError(true)
                                   setErrors({...errors, interest: false})
                               } else {
                                   setInterestError(false)
                                   setErrors({...errors, interest: true})
                               }
                           }}
                    />
                    <small className={`requiredHelpText ${styles.required} ${interestError ? 'show' : 'hidden'}`}>Please
                        provide a reason for your inquiry.
                    </small>
                </div>

                <div className={`formGroup ${styles.formGroup} ${messageError ? 'error' : ''}`}>
                    <label className={styles.label} htmlFor="messageInput">Message or Questions <span
                        className={styles.required}>*</span></label>
                    <textarea id="messageInput"
                              className={styles.textAreaBase}
                              value={messageValue}
                              onChange={event => {
                                  setMessageValue(event.target.value)
                              }}
                              onBlur={event => {
                                  const value = event.target.value
                                  if (value.trim().length === 0) {
                                      setMessageError(true)
                                      setErrors({...errors, message: false})
                                  } else {
                                      setMessageError(false)
                                      setErrors({...errors, message: true})
                                  }
                              }}

                    />
                    <small className={`requiredHelpText ${styles.required} ${messageError ? 'show' : 'hidden'}`}>Please
                        provide some context to your inquiry.
                    </small>
                </div>

                <button className={`button-solid`} type="submit">Send Message</button>
            </form>
            <div className={`${styles.formResponse}`}>
            </div>
        </Fragment>
    )
}

export default ContactForm;

