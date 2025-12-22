function Footer() {

    const date = new Date().getFullYear();

  return (
    <footer>
        Copyright &copy; {date}
    </footer>
  );
}

export default Footer