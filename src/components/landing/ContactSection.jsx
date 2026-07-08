import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function ContactSection() {
  return (
    <Box
      sx={{
        bgcolor: 'var(--color-accent-blue-bg)',
        borderRadius: 2,
        px: { xs: 3, md: 5 },
        py: { xs: 4, md: 6 },
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: 'var(--color-text-primary)', mb: 1, textAlign: 'center' }}
      >
        여기는 Contact 섹션입니다.
      </Typography>
      <Typography sx={{ color: 'var(--color-text-secondary)', mb: 4, textAlign: 'center' }}>
        연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
      </Typography>
      <Stack spacing={2} sx={{ maxWidth: 480, mx: 'auto' }}>
        <TextField label="이름" size="small" fullWidth />
        <TextField label="이메일" size="small" fullWidth />
        <TextField label="메시지" size="small" fullWidth multiline rows={3} />
        <Button
          variant="contained"
          disableElevation
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
          보내기
        </Button>
      </Stack>
    </Box>
  );
}

export default ContactSection;
