export default function CreateTailgate(props) {
  const { setLogin } = props;

  const signOut = () => {
    setLogin(false);
  };

  return (
    <>
      <h1>Create Tailgate</h1>
      <input type="button" value="Sign Out" onClick={signOut} />
    </>
  );
}
