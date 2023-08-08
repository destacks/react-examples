import React, { useState } from "react";
import HeadingSection from "../components/heading-section";

// Example 1

// ComponentA === ComponentB

function ComponentA() {
  return <div>Hello, world!</div>; // <- JSX, Syntical Sugar, It will be translated to React createElement function calls, NOT HTML!!!
}

// JSX from CompA gets internally translated into function of CompB

// Internals, nobody uses that in their code, if their are in their right mind ;)

function ComponentB() {
  // ONLY EXAMPLE PURPOSE, DON'T USE THIS KIND OF COMPONENT IN PRODUCTION
  return React.createElement("div", null, "Hello, world!"); // <- Function
}

// Example 2

function Title() {
  const result = 1 + 1;

  return (
    <div>
      <h1 className="title">Title: 1 + 1 = {result}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, itaque.
      </p>
    </div>
  );
}

function TitleAsPureReactFunctions() {
  // ONLY EXAMPLE PURPOSE, DON'T USE THIS KIND OF COMPONENT IN PRODUCTION
  //
  // Pure React, JSX !!! This component "ReactDoesWithTitle" (aka <ReactDoesWithTitle /> in JSX)
  // is technically equivalent to component "Title" (aka <Title /> in JSX)
  return React.createElement(
    "div",
    null,
    ...[
      React.createElement("h1", { className: "title" }, "Title"),
      React.createElement(
        "p",
        null,
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, itaque."
      ),
    ]
  );
}

// Example 3

function HelloA({ foo, bar, name }) {
  // const { foo, bar, name } = props; // props is for example: { foo: "Foo", bar: "Bar", name: "Alice" };

  // is equivalent to

  // const foo = props.foo;
  // const bar = props.bar;
  // const name = props.name;

  // return React.createElement("div", null, `Hello ${props.toWhat}`);
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
  // ONLY EXAMPLE PURPOSE, DON'T USE THIS KIND OF COMPONENT IN PRODUCTION
  return React.createElement("div", null, `Hello ${foo}, ${bar}, ${name}`);
}

// Example 4:

// ... next time: Custom Input React element where I get custom attributes and the rest in ...props.

export default function ExamplePage01() {
  return (
    <>
      <main>
        <HeadingSection title="Example Page 01" date="Jul 24, 2023" />
        <section>
          <div>
            <h1>Example 1</h1>
            <p>Purpose of example: ComponentA === ComponentB</p>
            <ComponentA />
            <ComponentB />
          </div>

          <div>
            <h1>Example 2</h1>
            <p>
              Purpose of example: Title === TitleAsPureReactFunctions,
              <br />
              plus JSX is Javascript (name = One example)
            </p>
            <Title />
            <TitleAsPureReactFunctions />
          </div>

          <div>
            <h1>Example 3</h1>
            <HelloA foo="Foo" bar="Bar" name="Alice" />
            <HelloA foo="Foo" bar="Bar" name="Bob" />
            <HelloB foo="Foo" bar="Bar" name="Charlie" />
          </div>

          {/* Entry point in your RLI Django-React project */}
          <div id="root"></div>
        </section>
        <article>
          <p>NOTES:</p>

          <p>
            React has two ways of creating componens, class-based and
            function-based.
            <br />
            Function-based is the modern, recommended way!!!
          </p>

          <p>JSX = &quot;J&quot;ava&quot;S&quot;cript an &quot;X&quot;ML</p>

          <p>
            <br />
            Every {} in JSX is going into JavaScript-Land. In there you can use
            normal JS assignments.
            <br />
            Examples:
            <br />
            <br />- a.{")"}: 1 + 1<br />- b.{")"}: &quot;Bob&quot;
            <br />- c.{")"}: {"("}
            {")"} {"->"} console.log{"("}&quot;foo&quot;{")"}
            <br />
          </p>

          <p>
            React is nothing else than Client-Side JS which inhabits one element
            of your DOM,
            <br />
            Most of the time a div element wrapped by the HTML body-tag.
            <br />
            <br />
            Please note:
            <br />
            <br />
            - But there it wants to rule complelty alone !!!
            <br />
            - No other JS is allowed in there, no JQuery, no custom JS or other
            libraries.
            <br />
            <br />
            Reason:
            <br />
            <br />
            React does NOT operate in the real &quot;DOM&quot;, React operates
            in the so called &quot;Virtual DOM&quot;.
            <br />
            In the &quot;Virtual DOM&quot; world, it produces one &quot;Virtual
            DOM&quot; {"("}current{")"} and on changes a second &quot;Virtual
            DOM&quot; {"("}next{")"}
            <br />
            and does a difference calculation {"("}aka diff calculation{")"}{" "}
            between those {"("}diff: current {"<->"} next{")"}.<br />
            And ONLY injects the differences {"("}surgically{")"} in the real
            &quot;DOM&quot; {"("}changedElement.innerHTML = &quot;I changed
            :D&quot;{")"}.<br />
            <br />
            In Principle:
            <br />
            <br />
            <br />
            Real-DOM {"("}looks at it once on startup{")"} {"->"} Virtual-DOM{" "}
            {"("}current{")"} {"->"} Virtual-DOM&#96; {"("}aka changed, next DOM
            {")"} {"->"} diff of both VDOMs {"->"}
            <br />
            inject into Real-DOM {"->"} on success, &quot;next&quot; VDOM
            becomes &quot;current&quot;, and cylce repeats.
            <br />
            <br />
            It does this on EVERY change!!! If you have many changes and or
            frequent changes,
            <br />
            this will slow down React to a hold, because of to many changes.
            <br />
            <br />
            Thumb Rules:
            <br />
            <br />
            1.{")"} Creating a real new DOM in a browser {"("}like Chrome{")"}{" "}
            is very expensive. Expensive means,
            <br />
            its taking CPU cycles {"("}aka calculation power{")"} and therefore
            time.
            <br />
            <br />
            2.{")"} Injecting only changes via &quot;elemnet.innerHTML&quot; is
            much cheaper, thats why React does this.
            <br />
            <br />
            3.{")"} BUt it has a Virtual DOM diffing cost, thats why
            &quot;Virtual DOM diffing&quot; like React does it
            <br />
            is a dumb but good enough solution {"("}most of the time{")"}
            <br />
            <br />
            4.{")"} Better and faster solution always diff and inject on the
            real &quot;DOM&quot;.
            <br />
            For example: Svelte, SolidJS, ...
          </p>
        </article>
      </main>
    </>
  );
}
