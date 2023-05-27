export const Complaint = (props) => {
  return (
    <div id="complaint">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-4">
            <h2>{props.data ? props.data.heading : null}</h2>
          </div>
        </div>
        <div>
          <div>
            <p id="description">
              We’ll give your complaint our full attention and keep you up to
              date with progress. It’s important to us that we resolve the issue
              for you as quickly as possible.
            </p>
          </div>
          <div id="complaint-description">
            <p>
              <ul>
                <li>
                  <b>Step 1: {" "}</b>{" "} Contact us and let us know what has happened
                  and what you want us to do to put it right. Depending on your
                  complaint type, you'll be able to contact our team by email of
                  telephone.
                </li>
                <li>
                  <b>Step 2: {" "}</b>{" "} We’ll work with you to resolve the matter as
                  quickly as we can.
                </li>
                <li>
                  <b>Step 3: {" "}</b>{" "} We will let you know what we have done to
                  resolve your issue and bring the matter to a close. If after
                  that, you’re unhappy with the outcome or it’s taken us longer
                  than 8 weeks to reach a solution, you have the right to take
                  matters further. We work with a number of ombudsman and
                  dispute resolution providers who will consider complaints
                  about our range of service, products and financial services
                  matters.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
