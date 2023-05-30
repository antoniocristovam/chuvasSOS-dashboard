import { GithubLogo, LinkedinLogo, PencilLine } from "phosphor-react";

import Avatar from "./Avatar";

import styles from "./Sidebar.module.css";
import { Container } from "reactstrap";

export const SidebarInfp = () => {
  return (
    <Container className="mt-5">
      <h1 className="mb-5">Equipe de desenvolvimento</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            width: "300px",
            backgroundColor: "lightcyan",
            borderRadius: "12px",
          }}
        >
          <aside className={styles.sidebar}>
            <img
              className={styles.cover}
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
              alt=""
            />

            <div className={styles.profile}>
              <Avatar src="https://github.com/antoniocristovam.png" />
              <strong>Antonio Cristovam</strong>
              <span>Web Developer</span>
            </div>

            <footer>
              <a href="https://github.com/antoniocristovam" target="_blank">
                <GithubLogo size={15} />
                Visite o nosso GitHub
              </a>
              <a
                href="https://linkedin.com/in/antoniocristovam/"
                target="_blank"
              >
                <LinkedinLogo size={15} />
                Visite o nosso Linkedin
              </a>
            </footer>
          </aside>
        </div>
        <div
          style={{
            width: "300px",
            backgroundColor: "lightcyan",
            borderRadius: "12px",
          }}
        >
          <aside className={styles.sidebar}>
            <img
              className={styles.cover}
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
              alt=""
            />

            <div className={styles.profile}>
              <Avatar src="https://github.com/GuilhermeGomes1929.png" />
              <strong>Luis Guilherme</strong>
              <span>Backend Developer</span>
            </div>

            <a href=""></a>

            <footer>
              <a href="https://github.com/GuilhermeGomes1929" target="_blank">
                <GithubLogo size={15} />
                Visite o nosso GitHub
              </a>
              <a
                href="https://linkedin.com/in/luis-guilherme-887173213/"
                target="_blank"
              >
                <LinkedinLogo size={15} />
                Visite o nosso Linkedin
              </a>
            </footer>
          </aside>
        </div>
        <div
          style={{
            width: "300px",
            backgroundColor: "lightcyan",
            borderRadius: "12px",
          }}
        >
          <aside className={styles.sidebar}>
            <img
              className={styles.cover}
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
              alt=""
            />

            <div className={styles.profile}>
              <Avatar src="https://github.com/GeyzonErik.png" />
              <strong>Geyzon Costa</strong>
              <span>Web Developer</span>
            </div>

            <a href=""></a>

            <footer>
              <a href="https://github.com/GeyzonErik">
                <GithubLogo size={15} />
                Visite o nosso GitHub
              </a>
              <a href="https://linkedin.com/in/geyzoncosta/" target="_blank">
                <LinkedinLogo size={15} />
                Visite o nosso Linkedin
              </a>
            </footer>
          </aside>
        </div>
      </div>
    </Container>
  );
};

export default SidebarInfp;
