import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';

export const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={values => {
        onAddContact({
          name: values.name,
          number: values.number,
          id: nanoid(),
        });
      }}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" required />

        <label htmlFor="number">Number</label>
        <Field id="number" name="number" type="tel" required />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
// import { nanoid } from 'nanoid';

// export const ContactForm = ({ name, onUpdateName, onAddContact }) => {
//   return (
//     <form
//       onSubmit={evt => {
//         evt.preventDefault();
//         onAddContact({
//           name: evt.target.name.value,
//           id: nanoid(),
//         });
//       }}
//     >
// <label htmlFor="name">
//   Name
//   <input
//     type="text"
//     id="name"
//     value={name}
//     onChange={evt => onUpdateName(evt.target.value)}
//   />
// </label>
//       <button type="submit">Add contact</button>
//     </form>
//   );
// };
