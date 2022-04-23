import React from "react";
import styles from './heading.module.css';

function Heading() {
  return(
    <>
      <section className={styles.containerSection}> 
        <section className={styles.backgroundSectionColorWhite}>
          <h1 className={styles.heading}>Heading One</h1>
          <p className={styles.paragraph}>Nam nulla ligula, rutrum non aliquam vel, rutrum id justo. Lorem ipso facto.</p>
        </section>
        <section className={styles.backgroundSectionColorDark}>
          <h2 className={styles.heading}>Heading Two</h2>
          <p className={styles.paragraph}>Rutrum non aliquam vel, rutrum id justo. </p>
        </section>
      </section>
    </>
  );
}

export default Heading;
