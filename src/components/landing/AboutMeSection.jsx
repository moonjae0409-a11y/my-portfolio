import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function AboutMeSection() {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        bgcolor: 'var(--color-bg-secondary)',
        borderRadius: 2,
        boxShadow: 'none',
        border: '1px solid var(--color-text-muted)',
      }}
    >
      <CardContent sx={{ px: { xs: 3, md: 5 }, py: { xs: 4, md: 6 }, textAlign: 'center' }}>
        <Typography
          variant="h4"
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: 'var(--color-text-primary)', mb: 2 }}
        >
          여기는 About Me 섹션 입니다.
        </Typography>
        <Typography sx={{ color: 'var(--color-text-secondary)', mb: 3 }}>
          간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.
        </Typography>
        <Button
          variant="contained"
          disableElevation
          onClick={() => navigate('/about')}
          sx={{
            bgcolor: 'var(--color-button-primary)',
            color: 'var(--color-accent)',
            transition: 'background-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease',
            '&:hover': {
              bgcolor: 'var(--color-button-hover)',
              boxShadow: '0 4px 12px rgba(224, 192, 0, 0.5)',
              transform: 'translateY(-1px)',
            },
            '&:active': {
              transform: 'translateY(0)',
            },
          }}
        >
          더 알아보기
        </Button>
      </CardContent>
    </Card>
  );
}

export default AboutMeSection;
