import React, {ReactNode} from 'react';

interface Props {
    title?: string,
    children: ReactNode;
}

export const Dialog = (props: Props) => (
    <div className="Dialog__container">
        {
            props.title && <div className="Dialog__title">
                {props.title}
            </div>
        }
        <div className="Dialog__content">
            {props.children}
        </div>
    </div>
);
