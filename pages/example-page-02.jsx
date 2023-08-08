import React, { useState } from "react";
import HeadingSection from "../components/heading-section";

function HelloA({ foo, bar, name }) {
  return (
    <div style={{ padding: "24px 0" }}>
      <input type="text" onChange={(e) => setFoo(e.target.value)} />
      <div>
        Hello {foo}, {bar}, {name}!
      </div>
    </div>
  );
}

function HelloB({ foo, bar, name }) {
  return (
    <div style={{ padding: "24px 0" }}>
      <div>
        Hello {foo}, {bar}, {name}!
      </div>
    </div>
  );
}

export default function ExamplePage02() {
  const [foo, setFoo] = useState("Initial Foo");

  return (
    <>
      <main>
        <HeadingSection title="Example Page 02" date="Aug 8, 2023" />
        <section>
          <h2>Example: Lifting Up the State</h2>
          <HelloA foo={foo} bar="Bar" name="Alice" />
          <HelloB foo={foo} bar="Bar" name="Charlie" />
        </section>
      </main>
    </>
  );
}
