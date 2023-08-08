import React from "react";
import Heading from "../components/page/heading";
import Markdown from "markdown-to-jsx";

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

export default function Examples01() {
  return (
    <>
      <Heading title="Examples 01" date="Jul 24, 2023" />
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
        <Markdown>{getNotes()}</Markdown>
      </article>
    </>
  );
}

function getNotes() {
  return `
# React Component Creation

## Introduction

React has two ways of creating components, class-based and function-based. Function-based is the modern, recommended way.

### JSX

JSX stands for "JavaScript and XML".

#### Usage in JavaScript

Every "{}" in JSX is going into JavaScript-Land. In there, you can use normal JS assignments. Examples:

- a.): 1 + 1
- b.): "Bob"
- c.): () => console.log("foo")

## React's Nature

React is nothing else than Client-Side JS which inhabits one element of your DOM, most of the time a div element wrapped by the HTML body-tag.

### Restrictions

Please note:

- But there, it wants to rule completely alone.
- No other JS is allowed in there, no JQuery, no custom JS, or other libraries.

## The Virtual DOM

React does NOT operate in the real "DOM"; React operates in the so-called "Virtual DOM". In the "Virtual DOM" world, it produces one "Virtual DOM" (current) and on changes, a second "Virtual DOM" (next), and does a difference calculation (aka diff calculation) between those (diff: current <-> next). It ONLY injects the differences (surgically) into the real "DOM" (changedElement.innerHTML = "I changed :D").

### Principle

Real-DOM (looks at it once on startup) -> Virtual-DOM (current) -> Virtual-DOM' (aka changed, next DOM) -> diff of both VDOMs -> inject into Real-DOM -> on success, "next" VDOM becomes "current", and the cycle repeats.

### Performance

It does this on EVERY change! If you have many changes and or frequent changes, this will slow down React to a hold because of too many changes.

### Thumb Rules

1. Creating a real new DOM in a browser (like Chrome) is very expensive. Expensive means it's taking CPU cycles (aka calculation power) and therefore time.
2. Injecting only changes via "element.innerHTML" is much cheaper; that's why React does this.
3. But it has a Virtual DOM diffing cost; that's why "Virtual DOM diffing" like React does it is a dumb but good enough solution (most of the time).
4. Better and faster solutions always diff and inject on the real "DOM". For example: Svelte, SolidJS, etc.

`;
}
