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
              <ul id="outerlist">
                <li>
                  <b>Step 1: </b> Contact us and let us know what has happened
                  and what you want us to do to put it right. Depending on your
                  complaint type, you'll be able to contact our team by email of
                  telephone.
                  <p className="innerlist-description">
                    Please contact us by email, telephone or post.
                  </p>
                  <ul id="innerlist">
                    <li>
                      <b>Email:</b> skalimited24@gmail.com
                    </li>
                    <li>
                      <b>Telephone:</b> +44 7470 190721{" "}
                    </li>
                    <li>
                      <b>Post:</b> 71-75 Shelton Street, Covent Garden, London,
                      United Kingdom, WC2H 9JQ{" "}
                    </li>
                  </ul>
                  <p className="innerlist-description">
                    Our customer relations team are available business days 9am
                    to 5pm.
                  </p>
                </li>
                <li>
                  <b>Step 2: </b> We’ll work with you to resolve the matter as
                  quickly as we can.
                  <p className="innerlist-description">
                    If after that, you’re unhappy with the outcome or it’s taken
                    us longer than 8 weeks to reach a solution, you have the
                    right to take matters further. We work with a number of
                    ombudsman and dispute resolution providers who will consider
                    complaints about our range of service, products and
                    financial services matters.
                  </p>
                </li>
                <li>
                  <b>Step 3: </b> We will let you know what we have done to
                  resolve your issue and bring the matter to a close. If after
                  that, you’re unhappy with the outcome or it’s taken us longer
                  than 8 weeks to reach a solution, you have the right to take
                  matters further. We work with a number of ombudsman and
                  dispute resolution providers who will consider complaints
                  about our range of service, products and financial services
                  matters.
                </li>
                <li>
                  <b>Step 4: </b> Whatever stage has been reached in the above
                  process eight weeks after we first received your complaint, we
                  shall send you an eight-week letter. Once you have received
                  that letter you are entitled to complain to the Ombudsman,
                  more details as to that step are below.
                </li>
                <li>
                  <b>Step 5: </b> If you chose to reject our decision (whether
                  the original decision or a revised decision) we will send you
                  a deadlock letter. This letter confirms that you have rejected
                  our decision as to your complaint. Once you receive this
                  letter you are entitled to complain to the Ombudsman.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
