import type { Meta } from "@storybook/react";
import { Alert } from "@mui/material";

const meta: Meta<typeof Alert> = {
    component: Alert,
    title: 'ValidationComponents/Alert',
}

export default meta;

export const Base = () => {
    <Alert>Error fetching data</Alert>
} 
