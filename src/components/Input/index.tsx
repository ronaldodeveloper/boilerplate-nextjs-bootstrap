import React from 'react';
import styles from "./Input.module.scss"
import { FormatLabel } from "./../../util"

type InputProps = React.ComponentProps<"input"> & {
    label: string
    iconeName?: string
    error?: string
    // setState: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({ label, iconeName, error, ...Props }: InputProps) => {

    const formatLabel = FormatLabel(label)
    
    return (
        <div className={`${styles.inputContainer}`}>
            <label htmlFor={formatLabel}  className={`${styles.label}`}>{label}</label>
            <div className={styles.inputGroup}>
                <input type="text" id={formatLabel} name={formatLabel} className={`${styles.input}`} {...Props} />
                {
                    iconeName && <span className={`icones ${iconeName} ${styles.icone}`}></span>
                }
            </div>
            {
                error && <span className={styles.error}>{error}</span>
            }
        </div>
    );
};

export default Input;