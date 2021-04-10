import React from 'react';
import PropTypes from 'prop-types';
import './link.css';

const propTypes = {
  href: PropTypes.string.isRequired,
};

const Link = ({ href }) => <a classNames='link' href={href}/>;

Link.propTypes = propTypes;
export default Link;
