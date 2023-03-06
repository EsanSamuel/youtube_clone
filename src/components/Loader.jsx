import React from 'react'
import { Box ,CircularProgress ,Stack } from '@mui/material'

const Loader = () => (
    <Box minHeight='95vh'>
        <Stack direction='row' alignItems='center' justifyContent='center'>
            <CircularProgress />
        </Stack>
    </Box>
)
export default Loader