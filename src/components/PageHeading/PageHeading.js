import s from './PageHeading.module.css';
import PropTypes from 'prop-types';

const PageHeading = ({ text }) => <h1 className={s.title}>{text}</h1>;

PageHeading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageHeading;
