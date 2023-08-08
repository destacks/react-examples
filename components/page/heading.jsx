const Heading = ({ title, date }) => (
  <div className="mb-16">
    <h1 className="font-bold text-3xl mb-2">{title}</h1>
    <p className="font-medium">{date}</p>
  </div>
);

export default Heading;
