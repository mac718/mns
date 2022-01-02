import Heading from "../components/Heading";
import styles from "./faq.module.css";

export default function Faq() {
  return (
    <main className={styles.main}>
      <Heading>FAQ</Heading>

      <p className={styles.question}>
        When will more [insert soap variety] be available?
      </p>

      <p className={styles.answer}>
        In most cases, I am not able to give a useful time frame. I don&apos;t
        make soap on a set schedule; I simply make what I can when I can. I post
        all stock updates on my Twitter and Facebook pages.
      </p>

      <p className={styles.question}>Why are so many items out of stock?</p>

      <p className={styles.answer}>
        As a one-man operation, I am only able to make so much soap; I
        don&apos;t have any employees, my batches are small, and I make
        questionuite a few varieties. Maintaining constant stock of every
        product on the site would be a full-time job unto itself (that is,
        without having to pack and ship orders, answer emails, constantly clean,
        etc.). I do my best to make as much soap as I can, but it just
        isn&apos;t possible for me to keep every item in stock at all times. In
        addition, I am often limited by finances; raw materials are not cheap
        and, contrary to the apparent perception of many, I have not become
        wealthy by selling handmade soap on the internet.
      </p>

      <p className={styles.question}>
        I&apos;d like to order the following varieties all together, many of
        which are currently out of stock. Could I place an order for all of the
        items and just wait until they are all ready? I&apos;m very patient.
      </p>

      <p className={styles.answer}>
        While this seems like a reasonable course of action, it&apos;s something
        that I prefer not to do. If I were to start taking such orders, things
        would get very messy very questionuickly. Furthermore, it can take a
        very long time for such orders to be ready to ship.
      </p>

      <p className={styles.question}>Can I add an item to my existing order?</p>

      <p className={styles.answer}>
        Yes, just place a new order and email me telling me that you&apos;ve
        done so. I&apos;ll combine the two orders and refund the appropriate
        amount for shipping.
      </p>

      <p className={styles.question}>
        I live near or in or will be visiting near or in Portland. Can I pick up
        my order or just stop by to check things out?
      </p>

      <p className={styles.answer}>
        I work from my home and I am not at all set up for drop-ins or pick-ups.
        Sorry.
      </p>

      <p className={styles.question}>
        Do any shops in Portland carry your products?
      </p>

      <p className={styles.answer}>No, not at the moment.</p>

      <p className={styles.question}>What are you in school for?</p>

      <p className={styles.answer}>
        Nothing. While it is the case that I started Mike&apos;s Natural Soaps
        in 2011 while I was a graduate student in Classical Philology, I left my
        program in the summer of 2012 when it became clear that it was not
        possible to pursue both endeavors simultaneously.
      </p>
    </main>
  );
}
