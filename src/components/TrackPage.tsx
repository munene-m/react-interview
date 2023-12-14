// The following code is in a react Router
// <Route path="/tracks/:id/something/:bd" element={<TrackPage users={users} />} />
// A user types in the following in the URL of a browser:
// https://domain.com/tracks/12345/something/jesus?foo=bar&x=yz
// a) Write code to extract the value 12345 from the URL bar on the TrackPage as well as the value of foo.
// b) How would you pass and extract a state variable in this route?

import { useParams, useLocation } from "react-router-dom";

export default function TrackPage({ users }) {
  const { id } = useParams(); // This would return the param 12345

  console.log(users);

  const { search } = useLocation(); //use useLocation to get the current URL
  const queryParams = new URLSearchParams(search);
  const foo = queryParams.get("foo");

  // Extracting state variable
  const { pieceOfState } = useLocation().state;
  //Below is how the state would have been passed in a component where user could click the link to the Trackpage route

  //    <Link to={{
  //     pathname: `/tracks/12345/something/jesus`,
  //     search: '?foo=bar&x=yz',
  //     state: { pieceOfState: 'yourValue' },
  //     }}
  // >
  //   Go to TrackPage
  // </Link>

  return (
    <div>
      <h2>Track Page</h2>
      <p>ID: {id}</p>
      <p>Foo: {foo}</p>
    </div>
  );
}
