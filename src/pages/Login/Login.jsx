import image from '../../assets/images/login.svg';
import Illustration from '../../components/Illustration/Illustration';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function Login() {
  return (
    <>
      <h1>Log in</h1>
      <div className="column">
        <Illustration image={image} />

        <LoginForm />
      </div>
    </>
  );
}
