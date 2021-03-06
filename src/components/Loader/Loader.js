import Loader from 'react-loader-spinner';
import s from './Loader.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const PreLoader = () => (
  <div className={s.preloader}>
    <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
  </div>
);

export default PreLoader;
