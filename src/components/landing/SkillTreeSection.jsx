import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';

const SKILLS = [
  { name: 'React', level: 80 },
  { name: 'JavaScript', level: 75 },
  { name: 'UI/UX Design', level: 60 },
];

function SkillTreeSection() {
  return (
    <Box
      sx={{
        bgcolor: 'var(--color-bg-primary)',
        border: '1px solid var(--color-taupe-light)',
        borderRadius: 2,
        px: { xs: 3, md: 5 },
        py: { xs: 4, md: 6 },
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: 'var(--color-text-primary)', mb: 1, textAlign: 'center' }}
      >
        여기는 Skill Tree 섹션입니다.
      </Typography>
      <Typography sx={{ color: 'var(--color-text-secondary)', mb: 4, textAlign: 'center' }}>
        기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
      </Typography>
      <Grid container spacing={2}>
        {SKILLS.map((skill) => (
          <Grid key={skill.name} size={{ xs: 12, md: 4 }}>
            <Typography sx={{ color: 'var(--color-text-primary)', mb: 1, fontWeight: 600 }}>
              {skill.name}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={skill.level}
              sx={{
                height: 6,
                borderRadius: 3,
                bgcolor: 'var(--color-bg-warm)',
                '& .MuiLinearProgress-bar': { bgcolor: 'var(--color-taupe-dark)' },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SkillTreeSection;
