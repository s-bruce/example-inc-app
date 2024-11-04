type TableColumn<Entry> = {
    field?: keyof Entry;
    title: string;
    callback?: ({ entry }: { entry: Entry }) => React.ReactElement;
};

export type TableProps<Entry> = {
    data: Entry[];
    columns: TableColumn<Entry>[];
};
