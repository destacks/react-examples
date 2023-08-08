export function Component({ title, children }) {
  return (
    <div className="p-8 m-8 border-pink-400 border-2 rounded-lg">
      <h1 class="font-bold">{title}</h1>
      <div className="my-8">{children}</div>
    </div>
  );
}

export default Component;
