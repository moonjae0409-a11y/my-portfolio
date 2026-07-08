import Stack from '@mui/material/Stack';
import HeroSection from '../components/landing/HeroSection.jsx';
import AboutMeSection from '../components/landing/AboutMeSection.jsx';
import SkillTreeSection from '../components/landing/SkillTreeSection.jsx';
import ProjectsSection from '../components/landing/ProjectsSection.jsx';
import ContactSection from '../components/landing/ContactSection.jsx';
import IdeaSection from '../components/landing/IdeaSection.jsx';

function Home() {
  return (
    <Stack spacing={{ xs: 4, md: 6 }} sx={{ py: { xs: 2, md: 4 } }}>
      <HeroSection />
      <AboutMeSection />
      <SkillTreeSection />
      <ProjectsSection />
      <ContactSection />
      <IdeaSection />
    </Stack>
  );
}

export default Home;
