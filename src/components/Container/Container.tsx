// import PropTypes from 'prop-types';
import styles from './Container.module.css';

interface IContainer {
  children?: React.ReactNode;
}

const Container = ({ children }: IContainer) => (
  <div className={styles.container}>{children}</div>
);

// Container.propTypes = {
//   children: PropTypes.node,
// };

export default Container;
