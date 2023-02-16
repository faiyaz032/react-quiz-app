import { Link } from 'react-router-dom';
import image from '../../assets/images/login.svg';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Illustration from '../../components/Illustration/Illustration';
import TextInput from '../../components/TextInput/TextInput';
import classes from './Login.module.css';

export default function Login() {
  return (
    <>
      <h1>Log in</h1>
      <div className="column">
        <Illustration image={image} />

        <Form className={classes.login}>
          <TextInput type="text" placeholder="Enter Name" iconText="person" />
          <TextInput type="password" placeholder="Enter Password" iconText="lock" />

          <Button text="Login" />

          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
