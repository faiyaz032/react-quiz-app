import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import TextInput from '../../components/TextInput/TextInput';
import { useAuth } from '../../contexts/AuthContext';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState();
  const [error, setError] = useState('');

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError('Failed to login');
    }
  };

  return (
    <Form style={{ height: '330px' }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter Email"
        icontext="person"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <TextInput
        type="password"
        placeholder="Enter Password"
        icontext="lock"
        onChange={e => setPassword(e.target.value)}
        value={password}
      />

      <Button disabled={loading} type="submit" text="Login" />
      {error && <p className="error">{error}</p>}
      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
}
