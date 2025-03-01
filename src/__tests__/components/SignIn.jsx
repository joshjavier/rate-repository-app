import { render, userEvent, waitFor } from '@testing-library/react-native';
import { SignInContainer } from '../../components/SignIn';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();

      const { getByPlaceholderText, getByText } = render(<SignInContainer onSubmit={onSubmit} />);

      const user = userEvent.setup();
      await user.type(getByPlaceholderText('Username'), 'kalle');
      await user.type(getByPlaceholderText('Password'), 'password');
      await user.press(getByText('Sign in'));

      await waitFor(() => {
        // expect the onSubmit function to have been called once with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.lastCall[0]).toMatchObject({
          username: 'kalle',
          password: 'password',
        });
      });
    });
  });
});
