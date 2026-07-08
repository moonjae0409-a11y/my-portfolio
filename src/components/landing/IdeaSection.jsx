import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const PLACEHOLDER_IDEAS = [1, 2, 3];

function IdeaSection() {
  return (
    <Box
      sx={{
        bgcolor: 'var(--color-bg-secondary)',
        borderRadius: 2,
        px: { xs: 3, md: 5 },
        py: { xs: 4, md: 6 },
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: 'var(--color-text-primary)', mb: 1, textAlign: 'center' }}
      >
        여기는 Idea 섹션 입니다.
      </Typography>
      <Typography sx={{ color: 'var(--color-text-secondary)', mb: 4, textAlign: 'center' }}>
        새로운 아이디어를 위한 사진들이 들어갈 예정 입니다.
      </Typography>
      <Grid container spacing={2}>
        {PLACEHOLDER_IDEAS.map((idea) => (
          <Grid key={idea} size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                bgcolor: 'var(--color-bg-primary)',
                borderTop: '3px solid var(--color-primary)',
                borderRadius: 1,
                height: 140,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-secondary)',
              }}
            >
              Idea {idea}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default IdeaSection;
