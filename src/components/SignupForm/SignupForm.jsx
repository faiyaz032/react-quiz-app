import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Form from '../Form/Form';
import TextInput from '../TextInput/TextInput';

export default function SignupForm() {
  return (
    <Form style={{ height: '500px' }}>
      <TextInput type="text" placeholder="Enter Name" iconText="person" />
      <TextInput type="text" placeholder="Enter Email" iconText="alternate_email" />
      <TextInput type="password" placeholder="Enter Name" iconText="lock" />
      <TextInput type="password" placeholder="Enter Name" iconText="lock_clock" />

      <Checkbox text="I agree to the Terms & Conditions" />

      <Button text="Submit" />

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
