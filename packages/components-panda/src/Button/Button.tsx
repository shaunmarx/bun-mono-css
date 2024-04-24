import React, { PropsWithChildren } from 'react';
import { button, type ButtonVariantProps } from '@local/components-panda/recipes';
import { css, cx } from "@local/components-panda/css";

export interface ButtonProps extends ButtonVariantProps, PropsWithChildren {
    onClick: React.MouseEventHandler;
}

export const Button = ({ children, ...props }: ButtonProps) => {
    return <button onClick={props.onClick} className={cx(button(props), 'src-btn', css({ backgroundColor: "black", cursor: "pointer"}))}>{children}</button>
}