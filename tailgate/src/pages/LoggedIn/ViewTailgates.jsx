export default function ViewTailgates(props) {
  const { setLogin } = props;

  const signOut = () => {
    setLogin(false);
  };
  return (
    <>
      <h1>View Tailgates</h1>
      <input type="button" value="Sign Out" onClick={signOut} />
    </>
  );
}
