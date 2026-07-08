import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: 'var(--color-primary)',
        color: 'var(--color-accent)',
        borderRadius: 2,
        px: { xs: 3, md: 6 },
        py: { xs: 6, md: 10 },
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '3rem' }, mb: 2 }}
      >
        여기는 Hero 섹션 입니다.
      </Typography>
      <Typography
        sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, color: 'var(--color-accent)' }}
      >
        메인 비주얼, 이름, 간단 소개가 들어갈 예정 입니다.
      </Typography>
    </Box>
  );
}

export default HeroSection;
