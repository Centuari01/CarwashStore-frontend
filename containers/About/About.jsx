import React from "react";
import "./About.css";
import Image from "next/image";
import BulletPoint from "@/components/BulletPoint";
const About = () => {
  return (
    <div className="About--Container">
      <div className="Info">
        <div className="Heading">About us</div>

        <div className="Content gap-2">
          <div>
            At <strong>OnelineCar</strong>, we believe in more than just washing cars;
            we&lsquo;re committed to delivering an unparalleled experience that
            goes beyond cleanliness. Here&lsquo;s what sets us apart:
          </div>

          <div>
            <strong>Passion for Precision:</strong>
            <p>
              Our team is driven by a passion for perfection. Every vehicle that
              rolls into our facility receives meticulous attention to detail,
              ensuring a spotless finish.
            </p>
          </div>

          <div>
            <strong>Environmentally Friendly:</strong>
            <p>
              We are proud to be an eco-conscious car wash. Our cleaning
              products are biodegradable, and we implement water-saving
              technologies to minimize our environmental impact.
            </p>
          </div>

          <div>
            <strong>Customer-Centric Approach:</strong>
            <p>
              Your satisfaction is our priority. We understand that your vehicle
              is more than just a mode of transportation; it&lsquo;s an
              investment. That&lsquo;s why we treat each car as if it were our
              own.
            </p>
          </div>

          <div>
            <strong>State-of-the-Art Facilities:</strong>
            <p>
              Equipped with the latest technology in car care, our facility
              boasts cutting-edge equipment to provide your vehicle with the
              best treatment possible.
            </p>
          </div>

          <div>
            <strong>Community Engagement:</strong>
            <p>
              We believe in giving back to the community that has supported us.
              OnelineCar actively participates in local initiatives and
              charities to contribute to the well-being of our community.
            </p>
          </div>

          <div>
            Whether you drive a compact car, a rugged SUV, or anything in
            between, OnelineCar is your trusted partner in keeping your vehicle
            immaculate.
          </div>

          <div>
            Thank you for choosing us. Let&lsquo;s embark on a journey to
            maintain the brilliance of your vehicle together!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
