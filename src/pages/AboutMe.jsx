import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function AboutMe() {
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
        About Me 페이지가 개발될 공간입니다.
      </Typography>
      <Typography sx={{ color: 'var(--color-text-secondary)' }}>
        상세한 자기소개가 들어갈 예정입니다.
      </Typography>
    </Box>
  );
}

export default AboutMe;
