import DataTable from 'react-data-table-component'
import nopfp from "../../assets/noimage.jpg"
import { Button } from '@mui/material';
import Edit from '@mui/icons-material/Edit'
import Delete from '@mui/icons-material/Delete'

const Tvshowstable = ({tvShow}) => {
    const columns = [
        {
            name: 'Poster',
            selector: row => row.poster,
        },
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Genres',
            selector: row => row.genres,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
        {
            name: 'Duration',
            selector: row => row.duration,
        },
        {
            name: 'Action',
            selector: row => row.actions,
        },

    ];
    
    const data = tvShow?.map(item => (
        {
            id: item.id,
            poster: nopfp,
            title: item.original_title,
            genres: 'Adventure',
            year: item.release_date,
            duration: item.runtime,
            actions: 
            <div className="editdelete">
                <Button><Edit /></Button>
                <Button><Delete /></Button>
            </div>
        }
    ))
        return (
            <DataTable
                columns={columns}
                data={data}
                pagination
            />
        );
}

export default Tvshowstable