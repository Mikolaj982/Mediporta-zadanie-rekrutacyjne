import React, { Dispatch, SetStateAction, useState } from 'react'
import SelectComponent from './Select';
import { Paper, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { TagData } from '../context/DataContext';

interface TagsListProps {
    sortBy: string,
    setSortBy: Dispatch<SetStateAction<string>>,
    sortOrder: string,
    setSortOrder: Dispatch<SetStateAction<string>>,
    tagsData: TagData[]
}

const TagsList: React.FC<TagsListProps> = ({ sortBy, setSortBy, sortOrder, setSortOrder, tagsData }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSortByChange = (event: SelectChangeEvent) => {
        setSortBy(event.target.value as string);
    };

    const handleSortOrderChange = (event: SelectChangeEvent) => {
        setSortOrder(event.target.value as string);
    };

    const getColumns = () => {
        const obj: TagData | undefined = tagsData?.find(element => {
            const keys = Object.keys(element).includes('name');
            return keys;
        });
        if (obj) {
            const columns = Object.keys(obj).map(key => (key === 'name' || key === 'count') ? { name: key } : undefined);
            return columns.filter(column => column !== undefined) as { name: string }[];
        }
    }

    const createData = (name: string, count: number) => {
        return { name, count }
    }

    const showRows = (): TagData[] => {
        let sortedRows: TagData[] | undefined = tagsData?.map((item) => {
            return createData(item.name, item.count);
        });
        if (sortBy === 'name') {
            sortedRows = sortedRows?.sort((a, b) => {
                if (sortOrder === 'asc') {
                    return a.name.localeCompare(b.name);
                } else {
                    return b.name.localeCompare(a.name);
                }
            });
        } else if (sortBy === 'count') {
            sortedRows = sortedRows?.sort((a, b) => {
                if (sortOrder === 'asc') {
                    return a.count - b.count;
                } else {
                    return b.count - a.count;
                }
            });
        }
        return sortedRows ?? [];
    }

    return <Paper sx={{ width: '100%', height: '100%' }}>
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            paddingTop: '20px',
            paddingBottom: '12px',
        }}>
            <SelectComponent
                id='sort-by-label'
                labelName='Sort by'
                items={['name', 'count']}
                value={sortBy}
                onChange={handleSortByChange}
            />
            <SelectComponent
                id='sort-order'
                labelName='Sort order'
                items={['asc', 'desc']}
                value={sortOrder}
                onChange={handleSortOrderChange}
            />
            <TablePagination
                rowsPerPageOptions={[10, 25, 50, 75, 100]}
                component="div"
                count={tagsData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
        <TableContainer sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead sx={{ backgroundColor: "#ffffff" }}>
                    <TableRow>
                        {getColumns()?.reverse().map((item) => {
                            return <TableCell
                                align="left"
                                key={item.name}
                                sx={{ color: "white", fontWeight: "bold", backgroundColor: "gray" }}
                            >
                                {item.name}
                            </TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {showRows()
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row: TagData) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                                    {getColumns()?.reverse().map((column) => {
                                        if (column.name === 'name' || column.name === 'count') {
                                            const value = row[column.name]
                                            return (
                                                <TableCell key={column.name}>
                                                    {value}
                                                </TableCell>
                                            );
                                        }
                                        return null
                                    })}
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
}

export default TagsList;
