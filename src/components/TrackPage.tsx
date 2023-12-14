// The following code is in a react Router
// <Route path="/tracks/:id/something/:bd" element={<TrackPage users={users} />} />
// A user types in the following in the URL of a browser:
// https://domain.com/tracks/12345/something/jesus?foo=bar&x=yz
// a) Write code to extract the value 12345 from the URL bar on the TrackPage as well as the value of foo.
// b) How would you pass and extract a state variable in this route?

import { useParams, useLocation } from "react-router-dom";

export default function TrackPage() {
  const { id } = useParams(); // This would return the param 12345

  const { search } = useLocation(); //use useLocation to get the current URL
  const queryParams = new URLSearchParams(search);
  const foo = queryParams.get("foo");

  return (
    <div>
      <h2>Track Page</h2>
      <p>ID: {id}</p>
      <p>Foo: {foo}</p>
    </div>
  );
}
