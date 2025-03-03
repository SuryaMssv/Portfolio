import { Slide, ToastContainer } from "react-toastify";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skill from "./components/Skill";

export default function Home() {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <section id="Home"><Hero/></section>
      <section id="Project"><Project/></section>
      <section id="Skill"><Skill/></section>
      <section id="Contact"><Contact/></section>
    </div>
  );
}
