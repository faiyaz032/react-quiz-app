import image from '../../assets/images/signup.svg';
import Button from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import Form from '../../components/Form/Form';
import Illustration from '../../components/Illustration/Illustration';
import TextInput from '../../components/TextInput/TextInput';
import classes from './Signup.module.css';

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={image} />

        <Form className={classes.signup}>
          <TextInput type="text" placeholder="Enter Name" iconText="person" />
          <TextInput type="text" placeholder="Enter Email" iconText="alternate_email" />
          <TextInput type="password" placeholder="Enter Name" iconText="lock" />
          <TextInput type="password" placeholder="Enter Name" iconText="lock_clock" />

          <Checkbox text="I agree to the Terms & Conditions" />

          <Button text="Submit" />

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
