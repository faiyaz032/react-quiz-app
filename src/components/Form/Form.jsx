import classes from './Form.module.css';

export default function Form({ ...rest }) {
  return (
    <form className={`${classes.form}`} {...rest} action="#">
      {...rest.children}
    </form>
  );
}
