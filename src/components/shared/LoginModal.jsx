/* eslint-disable react/prop-types */
import { Modal, Box, Typography } from '@mui/material'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
    outline: 'none',
}

const LoginModal = ({ open, onClose, onLogin }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={style}>
                <Typography
                    variant="h6"
                    component="h2"
                    sx={{ mb: 2, textAlign: 'center' }}
                >
                    Sign In Required
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 3, textAlign: 'center' }}
                >
                    You need to sign in to use this feature.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <button onClick={onClose} className="btn secondary-btn">
                        Close
                    </button>
                    <button onClick={onLogin} className="btn primary-btn">
                        Login
                    </button>
                </Box>
            </Box>
        </Modal>
    )
}

export default LoginModal
