
export default function APIPage() {
  const obj = {
    name : "John Doe",
    age : 30,
    email : "john@example.com"
  }; 

return (
    <>
      {JSON.stringify(obj, null, 2)}
    </>
  );
}
