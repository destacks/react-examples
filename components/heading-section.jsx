const HeadingSection = ({ title, date }) => (
  <div className="mb-16">
    <h1 className="font-bold text-4xl mb-8">{title}</h1>
    <p className="font-medium mb-8">{date}</p>
  </div>
);

export default HeadingSection;
