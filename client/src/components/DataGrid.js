import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator'

const DataGridTest = (props) => {
    const articles = useSelector((state) => state.articles)
    const { data } = useDemoData({
        dataSet: articles,
        rowLength: 1000,
    });

    return (
        <div style={{ height: 520, width: '100%' }}>
            <DataGrid
                {...data}
                components={{
                    Toolbar: GridToolbar,
                }}
                filterModel={{
                    items: [{ columnField: 'Test', operatorValue: 'contains', value: 'shit' }],
                }}
            />
        </div>
    );


}

export default DataGridTest
