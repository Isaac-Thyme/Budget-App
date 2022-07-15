import TextField from '@mui/material/TextField';

function Searchbar({ setSearchQuery }) {
    return (
        <div id="searchbar">
            <TextField onChange={(e) => setSearchQuery(e.target.value)} id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
    );
}

export default Searchbar;
