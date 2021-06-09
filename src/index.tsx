import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@material-ui/core';

export const ReactCustomTextField = () => {
    const [text, setText] = useState<string>('')
    const [status, setStatus] = useState<boolean>(false)

    const handleClick = () => {
        setStatus(true)
    }

    return (
        <>
            <Box width="300px" display="flex" alignItems="center" justifyContent="space-around">
                <TextField
                    style={{background: "white"}}
                    variant="outlined"
                    type="text"
                    defaultValue="テスト"
                    onChange={(e) => setText(e.target.value)}
                />
                <Button style={{height: 50}} variant="contained" color="primary" onClick={handleClick}>送信</Button>
            </Box>
            <Box>
                <Typography>
                    {status && text}
                </Typography>
            </Box>
        </>
    );
}