/* eslint-disable react/prop-types */
import Tooltip from '@mui/material/Tooltip'
import { Outlet } from 'react-router-dom'

export default function TooltipOffset({ title }) {
    return (
        <Tooltip
            title={title}
            slotProps={{
                popper: {
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, -14],
                            },
                        },
                    ],
                },
            }}
        >
            <Outlet />
        </Tooltip>
    )
}
