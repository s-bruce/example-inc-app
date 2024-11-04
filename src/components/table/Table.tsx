import { Table as MantineTable, Text } from '@mantine/core';
import { BaseEntity } from '../../types/api';
import { TableProps } from './types';

export const Table = <Entry extends BaseEntity>({
    data,
    columns,
}: TableProps<Entry>) => {
    return (
        <>
            <MantineTable withTableBorder bg="white">
                <MantineTable.Thead>
                    <MantineTable.Tr>
                        {columns.map((column, index) => (
                            <MantineTable.Th key={column.title + index}>
                                {column.title}
                            </MantineTable.Th>
                        ))}
                    </MantineTable.Tr>
                </MantineTable.Thead>
                <MantineTable.Tbody>
                    {data.map((entry) => (
                        <MantineTable.Tr key={entry.id}>
                            {columns.map(
                                ({ field, title, callback }, columnIndex) => (
                                    <MantineTable.Td key={title + columnIndex}>
                                        {callback
                                            ? callback({ entry })
                                            : field
                                            ? `${entry[field]}`
                                            : null}
                                    </MantineTable.Td>
                                )
                            )}
                        </MantineTable.Tr>
                    ))}
                </MantineTable.Tbody>
            </MantineTable>
            {!data.length && (
                <Text ta="center" mt="md">
                    No data to display
                </Text>
            )}
        </>
    );
};
