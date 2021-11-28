export default function InfoPage(props) {
  const { setLogin } = props;

  const signOut = () => {
    setLogin(false);
  };
  return (
    <>
      <h1>Info Page</h1>
      <input type="button" value="Sign Out" onClick={signOut} />
    </>
  );
}
