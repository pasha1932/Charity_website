// import styles from "./styles.module.css";

import { LetsSaveSection } from "@/widgets/lets-save-section";
import { Companies } from "@/widgets/companies";
import { Cooperation } from "@/widgets/cooperation";
import { FondResults } from "@/widgets/fond-results";
import { Help } from "@/widgets/help";
import { News } from "@/widgets/news";
import { Projects } from "@/widgets/projects";
import { Team } from "@/widgets/team";
import { About } from "@/widgets/about";
import { Routes } from "@/widgets/routes";


const MainPage = () => {
  return (
    <main>
      <LetsSaveSection />
      <About />
      <FondResults />
      <Team />
      <Routes />
      <Cooperation />
      <Companies />
      <Projects />
      <News />
      <Help />
    </main>
  );
};
 
export default MainPage;