import { MenuItem, NativeSelect, Typography } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import { useMutation, useQueryClient } from 'react-query'
import React, { useEffect, useState } from 'react';
import { updateTicketState } from './api/ticketApi';

export default function StateDropDown(props: any) {
    const ticketStates = ['open', 'active', 'closed']
    const queryClient = useQueryClient();
    const [ticketState, setticketState] = useState<string[]>([''])

    if (props.ticket.state === 'closed') return <Typography>Closed</Typography>;

    const updateTicket = useMutation(updateTicketState, {
        onSuccess: () => {
            queryClient.invalidateQueries('tickets')
        }
    })

    useEffect(() => {
        if (props.ticket.state) {
            console.log(props.ticket.state)
            let index = ticketStates.indexOf(props.ticket.state)
            setticketState(ticketStates.slice(index))
        }

    }, [props])


    const handleTicketStateChange = (event: any) => {
        const selectedValue = event.target.value;
        console.log("Selected value is", selectedValue)
        if (selectedValue !== props.ticket.state) {
            updateTicket.mutate({
                ...props.ticket,
                state: event.target?.value
            })
        }
    }

    return (
        <FormControl fullWidth>
            <Select
                id="demo-simple-select"
                value={props.ticket.state}
                onChange={handleTicketStateChange}
            >
                {
                    ticketState.map((tstate, index) => <MenuItem key={index} value={tstate}>{tstate}</MenuItem>)
                }
            </Select>

        </FormControl>
    )
}
