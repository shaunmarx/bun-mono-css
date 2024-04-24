import React from 'react';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
    base: {
        cursor: 'pointer',
        backgroundColor: 'pink',
        borderRadius: '5px',
        padding: "1rem",
    },
    highlighted: {
        color: 'rebeccapurple',
    },
});

export interface ButtonProps {
    children: React.ReactNode;
    onClick: React.MouseEventHandler;
}

export const Button = ({ children, ...props }: ButtonProps) => {
    return <button {...stylex.props(styles.base)} onClick={props.onClick}>{children}</button>
}