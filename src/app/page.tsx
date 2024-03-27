const Home = () => {
  return (
    <div className="text-center">
      {Array.from({ length: 10 }, (_, index) => (
        <div
          key={index}
          className={`my-8 text-8xl font-bold ${index % 2 === 1 ? "text-violet-500" : ""}`}
        >
          Sneak.
        </div>
      ))}
    </div>
  );
};

export default Home;
