// "SignUpForm містить інпути (Name, Email, Password), кнопку типу ""submit"" - Sign Up та має бути провалідована по події submit за допомогою бібліотек Formik + Yup.

// name - string, required
// email - string with pattern /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ , required
// password - string with pattern /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/ , required

// У разі наявності невалідних значень, причина помилки повинна бути відображена користувачеві, а дані - не відправлятися на backend.
// У разі, якщо всі значення валідні, - дані слід відправити на backend.

// Якщо backend повернув помилку - необхідно її опрацювати і відобразити користувачеві у вигляді вспливаючого віконечка-notification.
// Якщо запит на backend пройшов успішно та token для користувача сформовано - необхідно реалізувати автоматичну авторизацію та переадресувати його на приватну сторінку Params page."

import * as yup from 'yup';

let signinSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Error email'),
  password: yup
    .string()
    .min(6)
    .required()
    .matches(/^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/, 'Password bad'),
});

let signUpSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Error email'),
  password: yup
    .string()
    .min(6)
    .required()
    .matches(/^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/, 'Password bad'),
});

export const ValidationSchemas = { signinSchema, signUpSchema };
