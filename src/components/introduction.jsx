const Introduction = ( {data} ) => {
  if(!data) return null
  const { title, description } = data;
  console.log(data)
  return (
    <div id="introduction">
      <div className="container">
        <div className="section-title text-center">
          <h2>{title}</h2>
        </div>
        <div className="row">
          {description
            ? description.map((text, i) => (
                <div key={i}>
                  {" "}
                  <p>{text}</p>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
