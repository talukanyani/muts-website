import styles from "./Alert.module.css"
import Modal from "../elements/Modal"

import done_icon from "../assets/icon-done.svg"
import info_icon from "../assets/icon-info.svg"

function Alert(props) {
    var title = props.alertTitle

    return (
        <Modal open={props.isAlert} close={props.close}>
            <div className={styles.alert}>
                <h1>
                    <img
                        src={
                            title.includes('Successfully')
                                ? done_icon
                                : info_icon
                        }
                        alt='icon'
                    />
                    {title}
                </h1>
                <p>{props.alertBody}</p>
                <button onClick={props.close}>OK</button>
            </div>
        </Modal>
    )
}

export default Alert