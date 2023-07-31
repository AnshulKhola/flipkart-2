

import { Box, styled, Typography } from '@mui/material';

import { navData } from '../../constant/data';

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    marginTop: 55,
    marginBottom: 0,
    marginRight: 130,
    marginLeft: 70,
    overflow: 'hidden',
    justifyContent: 'space-between',
    [theme.breakpoints.down('lg')]: {
        margin: 0
    }

}));

const Container = styled(Box)`
    padding:12px 8px;
    text-align:center;
`
const Text = styled(Typography)`
    font-size:14px;
    font-weight:600;
    font-family: inherit;
`

const Navbar = () => {
    return (
        <Box style={{ background: '#fff' }}>
            <Component>
                {
                    navData.map(data => (
                        <Container>
                            <img src={data.url} alt="nav" />
                            <Text>{data.text}</Text>

                        </Container>

                    ))
                }

            </Component>
        </Box>
    )
}

export default Navbar;