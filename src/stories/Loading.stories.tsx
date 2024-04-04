import type { Meta } from "@storybook/react";
import { CircularProgress } from "@mui/material";

const meta: Meta<typeof CircularProgress> = {
    component: CircularProgress,
    title: 'ValidationComponents/Alert',
}

export default meta;

export const Base = () => {
    <CircularProgress />
} 
