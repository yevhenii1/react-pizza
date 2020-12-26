import React from 'react'
import classes from 'classnames'

const Button = ({className, children,}) => {
    return (
        <button 
            className={classes('button', 
            className,
            {
                // ' button--cart': props.buttonCart,
            })}
        >
        {children}
        </button>
    )
}

export default Button
