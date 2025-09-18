import Navigation from './components/Navigation';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import AwardsSection from './components/AwardsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <AwardsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
