import React, { useState } from "react";
import Heading from "../components/page/heading";
import Subheading from "../components/page/subheading";

const Greeter = ({ name }) => <div>Hello, {name}!</div>;

function Input({ name, onInputChange }) {
  const handleChange = (event) => onInputChange(event.target.value);

  return (
    <div className="p-8 m-8 border-pink-400 border-2 rounded-lg">
      <h1 class="font-bold">Input Component</h1>
      <div className="my-8">
        <input
          type="text"
          className="border-pink-400 border-2 rounded-md mb-4 p-1 focus:outline-sky-600 hover:border-sky-600 cursor-pointer"
          onChange={handleChange}
          placeholder={name}
        />
        <Greeter name={name} />
      </div>
    </div>
  );
}

function Display({ name }) {
  return (
    <div className="p-8 m-8 border-pink-400 border-2 rounded-lg">
      <h1 class="font-bold">Display Component</h1>
      <div className="my-8">
        <Greeter name={name} />
      </div>
    </div>
  );
}

export default function Examples02() {
  const [name, setName] = useState("Foo");
  return (
    <>
      <Heading title="Examples 02" date="Aug 8, 2023" />
      <section>
        <Subheading>Lifting Up the State:</Subheading>
        <div className="p-8 border-pink-400 border-2 rounded-lg">
          <h1 class="font-bold">Page Component</h1>
          <Input name={name} onInputChange={setName} />
          <Display name={name} />
        </div>
      </section>
    </>
  );
}
