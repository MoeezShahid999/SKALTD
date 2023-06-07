const Ombudsman = ({ data }) => {
  if (!data) return null;
  const { title, description } = data;
  console.log(data);
  return (
    <div id="ombudsman">
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
        <div className="row">
          <p>
            <b>The Ombudsman’s contact details:</b>
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:enquiry@ombudsman-services.org">
                enquiry@ombudsman-services.org
              </a>
            </li>
            <li>Telephone: 0330 440 1624</li>
            <li>Post: Energy Ombudsman, PO Box 966, Warrington, WA4 9DF</li>
            <li style={{ marginTop: "20px" }}>
              Website:{" "}
              <a href="https://www.ombudsman-services.org" target="_blank">
                www.ombudsman-services.org
              </a>
            </li>
          </ul>
          <p>
            <b>The Citizens Advice Bureau:</b>
          </p>
          <p>
            If you need independent and practical advice you can also contact
            the Citizens Advice Bureau. This service gives you free,
            confidential and impartial advice.
            <div>
              Website:{" "}
              <a href="https://www.citizensadvice.org.uk/" target="_blank">
                 www.citizensadvice.org.uk
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ombudsman;
