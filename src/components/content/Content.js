import React from "react";
import styles from './content.module.css';

function Content() {
  return(
    <> 
      <section className={styles.container}>
        <section className={styles.container}>
          <div>
            <p>One</p>
          </div>
          <div>
            <p>Two</p>
          </div>
        </section>
        <section>
          <div>
            <p>Three</p>
          </div>
        </section>
      </section>
    </>
  );
}

export default Content;