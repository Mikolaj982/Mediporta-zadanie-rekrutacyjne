import type { Meta, StoryObj } from "@storybook/react";
import { TableCell, TableRow } from "@mui/material";

const meta: Meta<typeof TableRow> = {
    component: TableRow,
    title: 'TagsListComponents/TableRow',
}

export default meta;

export const Base = () => {
    return <TableRow>
        <TableCell>name</TableCell>
    </TableRow>
}

export { }