import styles from "./Alert.module.css"
import Modal from "../elements/Modal"

import done_icon from "../assets/icon-done.svg"
import info_icon from "../assets/icon-info.svg"
import error_icon from "../assets/icon-error.svg"

function Alert(props) {
    var title = props.alertTitle

    const getIcon = () => {
        if (title.includes('Successfully')) {
            return done_icon
        } else if (title.includes('Wrong')) {
            return error_icon
        } else {
            return info_icon
        }
    }

    return (
        <Modal open={props.isAlert} close={props.close}>
            <div className={styles.alert}>
                <h1>
                    <img
                        src={getIcon()}
                        alt='icon'
                    />
                    {props.alertTitle}
                </h1>
                <p>{props.alertBody}</p>
                <button onClick={props.close}>OK</button>
            </div>
        </Modal>
    )
}

export default Alert