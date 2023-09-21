import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { getUserEmail } from '../../redux/selectors';
import { useDispatch} from "react-redux";
import { updateOperations } from '../../redux/update/updateOperations';

const UserForm = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);
 
  const eighteenYearAgo = dayjs().subtract(18, "year").format("YYYY-MM-DD");
  
  return (
    <Formik
      initialValues={{
        name: '',
        email: userEmail,
        height: '',
        currentWeight: '',
        desiredWeight: '',
        birthday: eighteenYearAgo,
        blood: '',
        sex: '',
        levelActivity: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('Reqired'),
        height: Yup.number().min(150, 'minimum 150(cm)').required('Reqired'),
        currentWeight: Yup.number()
          .min(35, 'minimum 35(kg)')
          .required('Reqired'),
        desiredWeight: Yup.number()
          .min(35, 'minimum 35(kg)')
          .required('Reqired'),
        birthday: Yup.date()
          .max(eighteenYearAgo, 'must be older then 18 years')
          .required('Reqired'),
        blood: Yup.number().required('Reqired'),
        sex: Yup.string().required('Reqired'),
        levelActivity: Yup.number().required('Reqired'),
      })}
      onSubmit={values => {
        dispatch(updateOperations.update(values))
      }}
    >
      <Form>
        <label htmlFor="name">Basic info</label>
        <Field type="text" name="name" />
        <Field type="email" name="email" disabled="disabled" />

        <label htmlFor="height">Height</label>
        <Field type="number" name="height" />

        <label htmlFor="currentWeight">Current Weight</label>
        <Field type="number" name="currentWeight" />
        <label htmlFor="desiredWeight">Desired Weight</label>
        <Field type="number" name="desiredWeight" />

        <Field type="date" name="birthday" />

        <label htmlFor="blood">Blood</label>
        <label htmlFor="blood">
          <Field type="radio" name="blood" value="1" />1
        </label>
        <label htmlFor="blood">
          <Field type="radio" name="blood" value="2" />2
        </label>
        <label htmlFor="blood">
          <Field type="radio" name="blood" value="3" />3
        </label>
        <label htmlFor="blood">
          <Field type="radio" name="blood" value="4" />4
        </label>

        <label htmlFor="sex">
          <Field type="radio" name="sex" value="Male" />
          Male
        </label>
        <label htmlFor="sex">
          <Field type="radio" name="sex" value="Female" />
          Female
        </label>

        <label htmlFor="levelActivity">
          <Field type="radio" name="levelActivity" value="1" />
          Sedentary lifestyle (little or no physical activity)
        </label>
        <label htmlFor="levelActivity">
          <Field type="radio" name="levelActivity" value="2" />
          Light activity (light exercises/sports 1-3 days per week)
        </label>
        <label htmlFor="levelActivity">
          <Field type="radio" name="levelActivity" value="3" />
          Moderately active (moderate exercises/sports 3-5 days per week)
        </label>
        <label htmlFor="levelActivity">
          <Field type="radio" name="levelActivity" value="4" />
          Very active (intense exercises/sports 6-7 days per week)
        </label>
        <label htmlFor="levelActivity">
          <Field type="radio" name="levelActivity" value="5" />
          Extremely active (very strenuous exercises/sports and physical work)
        </label>

        <button type="submit">Save</button>
      </Form>
    </Formik>
  );
};

export default UserForm;
 

