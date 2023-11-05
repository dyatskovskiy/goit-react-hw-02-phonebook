import { Formik, Field, Form } from 'formik';

export const ContactForm = ({ name, onUpdateName, onAddContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
      }}
      onSubmit={() => {
        onAddContact();
      }}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field
          id="name"
          name="name"
          value={name}
          onChange={evt => {
            onUpdateName(evt.target.value);
          }}
        />

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
