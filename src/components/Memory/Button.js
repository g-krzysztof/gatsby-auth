import React from 'react';

const Button = (props) => {
    const buttons = props.buttons;
    return (
        buttons.map(button => <button
            className={button.disabled === true ? "memory__btn memory__btn--disabled" : "memory__btn"}
            key={button.id}
            id={button.id}
            onClick={props.onClick}
            disabled={button.disabled}
        >
            {button.clicked ? button.name : null}
        </button>)
    );
}

export default Button;