import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const styles = theme => ({});

function Button(props) {
    const {
        children,
        classes,
        className: classNameProp,
        color,
        disabled,
        ...other
    } = props;

    return (
        <Button
            className={className}
            disabled={disabled}
            {...other}
        >
            {children}
        </Button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string,

};

export default Button;
