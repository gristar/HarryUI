import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const styles = theme => {
    return {}
};

function AppBar(props) {
    const {children, classes, className: classNameProp, ...other} = props;

    const className = classNames(
        classes.root,
    );

    return (
        <Component className={className} {...other}>
            {children}
        </Component>
    )
}

AppBar.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'default']),
    position: PropTypes.oneOf(['fixed', 'absolute', 'sticky', 'static', 'relative']),
};

AppBar.defaultProps = {
    color: 'primary',
    position: 'fixed',
};

export default AppBar;
