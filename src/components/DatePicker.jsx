import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { WhiteTextField } from './WhiteTextField';

const CustomDatePicker = ({ value, onChange }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Select Date"
                value={value}
                onChange={onChange}
                textField={(params) => (
                    <WhiteTextField
                        {...params}
                        variant="standard"
                        style={{ width: '100%' }}
                    />
                )}
            />
        </LocalizationProvider>
    );
};

export default CustomDatePicker;