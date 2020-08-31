import React, {
    useRef,
    useState,
    Fragment,
    createContext,
} from 'react'
import ModalAlert from './modalAlert'

const initalState = {
    message: '',
    type : '',
    modal : ''
}

export const ModalContext = createContext(Promise.reject)

export const ModalProvider = ({ children }) => {
    const [confirmationState, setConfirmationState] = useState(null)
    const awaitingPromiseRef = useRef()

    const openConfirmation = options => {
        setConfirmationState(options)
        return new Promise((resolve, reject) => {
            awaitingPromiseRef.current = { resolve, reject }
        })
    }

    const handleClose = () => {
        if (awaitingPromiseRef.current) {
            awaitingPromiseRef.current.reject()
        }

        setConfirmationState(null)
    }

    const handleSubmit = () => {
        if (awaitingPromiseRef.current) {
            awaitingPromiseRef.current.resolve()
        }

        setConfirmationState(null)
    }

    return (
        <Fragment>
            <ModalContext.Provider value={openConfirmation}>
                {children}
                <ModalAlert
                    isOpen={Boolean(confirmationState)}
                    onSubmit={handleSubmit}
                    onClose={handleClose}
                    {...confirmationState}
                />
            </ModalContext.Provider>
        </Fragment>
    )
}
