import Footer from "../components/Footer";
import SubHeading from "../components/SubHeading";
import styles from "./about_mike.module.css";

export default function AboutMike() {
  return (
    <>
      <main className={styles.main}>
        <SubHeading>
          <a href="mailto:mike@mikesnaturalsoaps">mike@mikesnaturalsoaps</a>
        </SubHeading>
        <p className={styles.content}>
          Way back in 2009, I became absolutely fed up with my painful and
          expensive shaving ritual consisting of a multi-blade cartridge razor
          and one of many varieties of pressurized goo in a can. In an effort to
          make my facial hair removal not only more cost-effective, but also
          more pleasant, I took to the internet for information on alternatives.
          It didn't take long for me to stumble upon the wet shaving forums, all
          of which extolled the virtues of shaving with a brush and a
          traditional, non pressurized, soap or cream. After reading countless
          testimonials professing the efficacy of these practices, I ordered
          myself some traditional shaving gear. Since then, my morning shave has
          transformed from an unpleasant chore to a luxurious treat that I look
          forward to every day.
        </p>
        <p className={styles.content}>
          So how did this lead to my setting up an online soap shop? My shaving
          renaissance led me to experiment with a wide variety of soaps and
          creams. I was so impressed with their performance that I became
          interested in their composition. After some researching, I decided it
          might be fruitful to try my hand at making my own shaving soap. With
          this in mind, I embarked upon my new hobby, which immediately
          satisfied my fastidious nature. My efforts at producing an excellent
          shaving soap for my wet shaving brethren quickly expanded into the
          realm of bath soaps for my friends and family as well. After all, I
          had long given up on mass-produced, chemical-laden, bath "soaps" in
          favor of real, natural soap. I use all of my products myself and am
          dedicated to creating the most sensory-satisfying soaps possible using
          natural, skin nurturing ingredients, which will turn your most mundane
          grooming and bathing routines into something far more opulent.
        </p>
      </main>
      <Footer />
    </>
  );
}
