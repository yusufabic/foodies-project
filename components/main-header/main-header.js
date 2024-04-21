import Link from "next/link";
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";
import classes from "./main-header.module.css";

export default function MainHedaer() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <img src={logoImg.src} alt="A plate food on it" />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Brows Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
