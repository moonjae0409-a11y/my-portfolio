import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

const PLACEHOLDER_PROJECTS = ['Project 1', 'Project 2', 'Project 3', 'Project 4'];

function ProjectsSection() {
  const navigate = useNavigate();

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
        여기는 Projects 섹션입니다.
      </Typography>
      <Typography sx={{ color: 'var(--color-text-secondary)', mb: 4, textAlign: 'center' }}>
        대표작 썸네일 3~4개와 '더 보기' 버튼이 들어갈 예정입니다.
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {PLACEHOLDER_PROJECTS.map((title) => (
          <Grid key={title} size={{ xs: 12, md: 6 }}>
            <Card sx={{ bgcolor: 'var(--color-bg-primary)', boxShadow: 'none', border: '1px solid var(--color-text-muted)' }}>
              <CardContent>
                <Typography sx={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>
                  {title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="outlined"
          onClick={() => navigate('/projects')}
          sx={{
            borderColor: 'var(--color-link)',
            color: 'var(--color-link)',
            transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease',
            '&:hover': {
              borderColor: 'var(--color-link-hover)',
              color: 'var(--color-link-hover)',
              bgcolor: 'var(--color-accent-blue-bg)',
            },
          }}
        >
          더 보기
        </Button>
      </Box>
    </Box>
  );
}

export default ProjectsSection;
