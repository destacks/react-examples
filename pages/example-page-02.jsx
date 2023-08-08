import React, { useState } from "react";
import HeadingSection from "components/heading-section";
import Layout from "components/layout";

function Input({ foo, bar, name, onInputChange }) {
  const handleChange = (event) => onInputChange(event.target.value);

  return (
    <div className="my-8">
      <input type="text" className="my-8" onChange={handleChange} />
      <div>
        Hello {foo}, {bar}, {name}!
      </div>
    </div>
  );
}

function Display({ foo, bar, name }) {
  return (
    <div className="my-8">
      <div>
        Hello {foo}, {bar}, {name}!
      </div>
    </div>
  );
}

export default function ExamplePage02() {
  const [foo, setFoo] = useState("Foo");
  return (
    <Layout>
      <main>
        <HeadingSection title="Example Page 02" date="Aug 8, 2023" />
        <section>
          <h2>Example: Lifting Up the State</h2>
          <br /> <br />
          <Input foo={foo} bar="Bar" name="Alice" onInputChange={setFoo} />
          <Display foo={foo} bar="Bar" name="Charlie" />
        </section>
      </main>
    </Layout>
  );
}
