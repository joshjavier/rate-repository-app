import { useFormik } from 'formik';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import * as yup from 'yup';
import theme from '../theme';
import Text from './Text';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: theme.fontSizes.body,
    gap: theme.fontSizes.body,
  },
  field: {
    gap: 4,
  },
  input: {
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    borderRadius: 4,
    padding: theme.fontSizes.body,
    color: theme.colors.textSecondary,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: theme.fontSizes.body,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().min(5).max(30).required('Username is required'),
  password: yup.string().min(5).max(30).required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], "Password doesn't match")
    .required('Password confirmation is required'),
});

const SignUpContainer = ({ onSubmit }) => {
  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: '',
      password: '',
      passwordConfirmation: '',
    },
    onSubmit,
    validationSchema,
  });

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <TextInput
          placeholder="Username"
          value={values.username}
          onChangeText={handleChange('username')}
          style={[
            styles.input,
            touched.username && errors.username && { borderColor: theme.colors.error },
          ]}
        />
        {touched.username && errors.username && <Text color="error">{errors.username}</Text>}
      </View>
      <View style={styles.field}>
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={values.password}
          onChangeText={handleChange('password')}
          style={[
            styles.input,
            touched.password && errors.password && { borderColor: theme.colors.error },
          ]}
        />
        {touched.password && errors.password && <Text color="error">{errors.password}</Text>}
      </View>
      <View style={styles.field}>
        <TextInput
          placeholder="Password confirmation"
          secureTextEntry
          value={values.passwordConfirmation}
          onChangeText={handleChange('passwordConfirmation')}
          style={[
            styles.input,
            touched.passwordConfirmation &&
              errors.passwordConfirmation && { borderColor: theme.colors.error },
          ]}
        />
        {touched.passwordConfirmation && errors.passwordConfirmation && (
          <Text color="error">{errors.passwordConfirmation}</Text>
        )}
      </View>
      <Pressable onPress={handleSubmit} style={styles.button}>
        <Text fontWeight="bold" style={styles.buttonText}>
          Sign up
        </Text>
      </Pressable>
    </View>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { user } = await signUp({ username, password });

      if (user) {
        await signIn({ username, password });
        navigate('/');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
