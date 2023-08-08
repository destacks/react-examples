import React, { useState } from "react";
import Heading from "../components/page/heading";
import SubHeading from "../components/page/sub-heading";
import Component from "../components/page/component";

const Greeter = ({ name }) => <div>Hello, {name}!</div>;

function Input({ name, onInputChange }) {
  const handleChange = (event) => onInputChange(event.target.value);

  return (
    <Component title="Input Component">
      <input
        type="text"
        className="border-pink-400 border-2 rounded-md mb-4 p-1 focus:outline-sky-600 hover:border-sky-600 cursor-pointer"
        onChange={handleChange}
        placeholder={name}
      />
      <Greeter name={name} />
    </Component>
  );
}

function Display({ name }) {
  return (
    <Component title="Display Component">
      <div className="my-8">
        <Greeter name={name} />
      </div>
    </Component>
  );
}

export default function Examples02() {
  const [name, setName] = useState("Foo");
  return (
    <>
      <Heading title="Examples 02" date="Aug 8, 2023" />
      <section>
        <SubHeading>Lifting Up the State:</SubHeading>
        <div className="p-8 border-pink-400 border-2 rounded-lg">
          <h1 class="font-bold">Page Component</h1>
          <Input name={name} onInputChange={setName} />
          <Display name={name} />
        </div>
      </section>
    </>
  );
}
