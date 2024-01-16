import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            Your privacy matters to us. That’s why we strive to be transparent
            about how we collect, use, and share information about you.
          </p>

          <p>
            we process your data pursuant to one of the legal purposes described
            below (lawful).
          </p>
          <p>
            the processing matches the description given in this Privacy Policy
            (fair).
          </p>
          <p>
            we explain what data we collect and how we process it (transparent).
          </p>
          <p>
            restricted use — we use your personal information for all other
            purposes only with your consent or if permitted by a competent
            authority or applicable laws.
          </p>
          <p>
            storage limitation — we do not keep your personal information for
            longer than it is necessary for the purposes for which it is
            processed.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
