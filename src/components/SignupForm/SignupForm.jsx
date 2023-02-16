import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Form from '../Form/Form';
import TextInput from '../TextInput/TextInput';

export default function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { signup } = useAuth();

  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError('Password does not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password, username);
      navigate('/');
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError('Failed to signup');
    }
  };

  return (
    <Form style={{ height: '500px' }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        required
        placeholder="Enter Name"
        icontext="person"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <TextInput
        type="text"
        required
        placeholder="Enter Email"
        icontext="alternate_email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        required
        placeholder="Enter Password"
        icontext="lock"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <TextInput
        type="password"
        required
        placeholder="Confirm Password"
        icontext="lock_clock"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />

      <Checkbox
        required
        text="I agree to the Terms & Conditions"
        value={agree}
        onChange={e => setAgree(e.target.password)}
      />

      <Button disabled={loading} type="submit" text="Submit" />

      {error && <p className="error">{error}</p>}

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
