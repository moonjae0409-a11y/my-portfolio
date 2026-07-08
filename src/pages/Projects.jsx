import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Projects() {
  return (
    <Box
      sx={{
        bgcolor: 'var(--color-bg-secondary)',
        borderRadius: 2,
        px: { xs: 3, md: 5 },
        py: { xs: 6, md: 10 },
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: 'var(--color-text-primary)', mb: 2 }}
      >
        Projects 페이지가 개발될 공간입니다.
      </Typography>
      <Typography sx={{ color: 'var(--color-text-secondary)' }}>
        포트폴리오 작품들이 들어갈 예정입니다.
      </Typography>
    </Box>
  );
}

export default Projects;
