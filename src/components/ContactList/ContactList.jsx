import { Filter } from 'components/Filter/Filter';

export const ContactList = ({ onUpdateFilter, children }) => {
  return (
    <>
      <h2>Contacts</h2>
      <Filter onUpdateFilter={onUpdateFilter} />
      <ul>{children}</ul>
    </>
  );
};
