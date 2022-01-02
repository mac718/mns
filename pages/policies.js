import Heading from "../components/Heading";
import styles from "./policies.module.css";

export default function Policies() {
  return (
    <main className={styles.main}>
      <section>
        <Heading>Shipping</Heading>
        <p>At this time, shipping is available to the US and Canada only.</p>
        <div>
          <span className={styles.subheading}>
            US Shipments (inclues APO addresses):
          </span>
          <p>
            All orders are shipped via USPS. For orders that weigh under 1
            pound, First Class Mail and Priority Mail options are available.
            Orders that weight over 1 pound will be shipped via Priority Mail.
            First Class Mail shipments typically take between 3 and 7 days to
            arrive within the continental US, but can take less or more time
            depending on various factors. Priority shipments typically take
            between 1-3 days to arrive. Expect longer transit transit times for
            shipments to AK, HI, and APO sites.
          </p>
          <span className={styles.subheading}>Canadian Shipments:</span>
          <p>
            All orders are shipped via USPS. For orders that weigh under 1
            pound, First Class Mail and Priority Mail options are available.
            Orders that weight over 1 pound will be shipped via Priority Mail.
            Transit times to Canada can vary a great deal, but typically take no
            longer than 12 days.
          </p>
        </div>
      </section>
      <section>
        <Heading>Returns/Exchanges</Heading>
        I&apos;m happy to accomdate return and exchange requests for unused
        items in good condition. Buyer is responsible for shipping fees. Email
        me at{" "}
        <a href="mailto:mike@mikesnaturalsoaps.com">
          mike@mikesnaturalsoaps.com
        </a>{" "}
        for a return or exchange request.
      </section>
    </main>
  );
}
