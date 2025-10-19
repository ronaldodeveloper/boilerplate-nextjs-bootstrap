"use client";
import styles from "./Button.module.scss";

type ButtonProps = React.ComponentProps<"button"> & {
    iconeName?: string
    iconeDirection?: 'left' | 'right'
    variante?: string 
}

function Button( { children , iconeName, iconeDirection = "right", variante, ...props} : ButtonProps ) {

    console.log(iconeName)
    return (
        <button
            className={`${styles.button} ${styles[variante || '']} ${!children && styles.buttonIconOnly}`}
            {...props}>
                 { iconeName && iconeDirection === 'left' && <span className={`icones ${iconeName}`}></span> }
                  { children}
                 { iconeName && iconeDirection === 'right' && <span className={`icones ${iconeName}`}></span> }
        </button>
    )
}
export default Button;