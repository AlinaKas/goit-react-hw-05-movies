import default_error from '../../images/default_error.png';

export default function NotFoundPage() {
  return (
    <img
      style={{ margin: '0 auto', width: '100%' }}
      src={default_error}
      alt="Nothing found"
    />
  );
}
