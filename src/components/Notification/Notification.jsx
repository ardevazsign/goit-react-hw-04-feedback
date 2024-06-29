import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return <div className={css.messageHolder}>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};