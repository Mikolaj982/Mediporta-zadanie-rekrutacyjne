import { TablePagination } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TablePagination> = {
    component: TablePagination,
    title: 'TagsListComponents/TablePagination',
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base = {
    args: {
        rowsPerPageOptions: [10, 25, 50, 75, 100],
        count: 10,
        rowsPerPage: 10,
        page: 1,
        onPageChange: () => { },
        onRowsPerPageChange: () => { },
    },
} satisfies Story

export { }