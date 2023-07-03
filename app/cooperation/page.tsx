import { Phone, Typography } from "@/common";
import { FeedbackForm } from "@/components";

import styles from './page.module.css';


const Cooperation = () => {
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.coopInfo}>
                <Typography fontSize="40" uppercase={true}>
                    Сотрудничество
                </Typography>
                <div className={styles.phone}>
                    <Typography fontSize="16" color="primary-50">
                        по вопросам сотрудничества
                    </Typography>
                    <Phone tel='74951112233' size="26"/>
                </div>
            </div>
            <div className={styles.formWrapper}>
                <div className={styles.formTitle}>
                    <Typography fontSize="28" color="primary-50">
                        Напишите нам, и мы предоставим всю необходимую информацию.
                    </Typography>
                </div>
                <FeedbackForm/>
            </div>
            
        </div>
    )
};

export default Cooperation;