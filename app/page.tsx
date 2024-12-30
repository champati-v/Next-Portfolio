import ContactMe from "@/components/ContactMe";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Contact, HomeIcon, UserCircle2Icon, SettingsIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col mx-auto overflow-x-hidden overflow-y-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <HomeIcon/>},
          {name: 'Skills', link: '#skills', icon: <SettingsIcon/>},
          {name: 'Contact', link: '#contact', icon: <UserCircle2Icon/>},
          ]}/>
         <div className="mt-[-20px]">  
          <Hero/>
        </div>
        <Projects/>
        <Skills/>
        <ContactMe/>
      </div>
    </main>
  );
}