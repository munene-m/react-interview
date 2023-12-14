import { useEffect, useState } from "react";

export default function () {
  const [response, setResponse] = useState("");
  function areNamesEqual(firstName: string, secondName: string) {
    const firstNameArray = firstName.toLowerCase().split(" ");
    const secondNameArray = secondName.toLowerCase().split(" ");

    return firstNameArray.every((name) => secondNameArray.includes(name));
  }

  const firstNameString1 = "James Mugo";
  const firstNameString2 = "Mugo james Otieno";

  const result = areNamesEqual(firstNameString1, firstNameString2);

  if (result) {
    // console.log("All names in the first record are also in the second record.");
    useEffect(() => {
      setResponse(
        "All names in the first record are also in the second record."
      );
    }, []);
  } else {
    // console.log("Not all names in the first record are in the second record.");
    useEffect(() => {
      setResponse(
        "Not all names in the first record are in the second record."
      );
    }, []);
  }
  return (
    <div>
      <h1>
        Question - The following are the same person’s names on two separate
        strings a. James Mugo b. Mugo james Otieno
      </h1>
      <p>Response - {response}</p>
    </div>
  );
}
