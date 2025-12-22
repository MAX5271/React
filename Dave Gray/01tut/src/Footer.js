function Footer({ length }) {
  return (
    <footer>{length === 0 ? <p>Add items to your list</p> : length === 1 ? <p>1 List Item</p> : <p>{length} List Items</p>}</footer>
  );
}

export default Footer;
