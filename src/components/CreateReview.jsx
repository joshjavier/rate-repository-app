import { useFormik } from 'formik';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import * as yup from 'yup';
import Text from './Text';
import theme from '../theme';
import useCreateReview from '../hooks/useCreateReview';

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
  repositoryName: yup.string().required('Repository name is required'),
  ownerName: yup.string().required('Repository owner name is required'),
  rating: yup.number().integer().min(0).max(100).required('Rating is required'),
  text: yup.string(),
});

const CreateReviewContainer = ({ onSubmit }) => {
  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      repositoryName: '',
      ownerName: '',
      rating: '',
      text: '',
    },
    onSubmit,
    validationSchema,
  });

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <TextInput
          placeholder="Repository owner name"
          value={values.ownerName}
          onChangeText={handleChange('ownerName')}
          style={[
            styles.input,
            touched.ownerName && errors.ownerName && { borderColor: theme.colors.error },
          ]}
        />
        {touched.ownerName && errors.ownerName && <Text color="error">{errors.ownerName}</Text>}
      </View>
      <View style={styles.field}>
        <TextInput
          placeholder="Repository name"
          value={values.repositoryName}
          onChangeText={handleChange('repositoryName')}
          style={[
            styles.input,
            touched.repositoryName && errors.repositoryName && { borderColor: theme.colors.error },
          ]}
        />
        {touched.repositoryName && errors.repositoryName && (
          <Text color="error">{errors.repositoryName}</Text>
        )}
      </View>
      <View style={styles.field}>
        <TextInput
          placeholder="Rating between 0 and 100"
          value={values.rating}
          onChangeText={handleChange('rating')}
          style={[
            styles.input,
            touched.rating && errors.rating && { borderColor: theme.colors.error },
          ]}
        />
        {touched.rating && errors.rating && <Text color="error">{errors.rating}</Text>}
      </View>
      <View style={styles.field}>
        <TextInput
          placeholder="Review"
          multiline
          maxLength={2000}
          value={values.text}
          onChangeText={handleChange('text')}
          style={[styles.input, touched.text && errors.text && { borderColor: theme.colors.error }]}
        />
      </View>
      <Pressable onPress={handleSubmit} style={styles.button}>
        <Text fontWeight="bold" style={styles.buttonText}>
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, text } = values;

    try {
      const { review } = await createReview({
        repositoryName,
        ownerName,
        rating: parseInt(rating),
        text,
      });
      console.log(review);
      navigate(`/repository/${review.repository.id}`);
    } catch (e) {
      console.log(e);
    }
  };

  return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;
