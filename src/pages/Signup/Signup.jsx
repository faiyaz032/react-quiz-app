import image from '../../assets/images/signup.svg';
import Illustration from '../../components/Illustration/Illustration';
import SignupForm from '../../components/SignupForm/SignupForm';

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={image} />

        <SignupForm />
      </div>
    </>
  );
}
