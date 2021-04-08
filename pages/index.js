import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default function Index() {
  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' component='h1' gutterBottom align='center'>
        Next.js with Material-UI sample
      </Typography>
      <Typography variant='body2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut quod
        illum repellat corporis cum mollitia nulla totam id eveniet! Nihil quos,
        repudiandae fuga impedit nostrum veritatis atque similique consequatur.
      </Typography>
    </Container>
  );
}
