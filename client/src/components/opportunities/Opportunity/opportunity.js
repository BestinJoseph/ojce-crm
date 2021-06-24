import { makeStyles } from "@material-ui/core";

export default makeStyles( () => ({
    opportunity: {
        margin: '0 2rem',

        '& .create': {
            padding: '1rem',
            background: 'Blue',
            display: 'inline-block',
            marginTop: '2rem',
            textDecoration: 'none',
            fontWeight: '600',
            color: 'white',
            textTransform: 'uppercase',

            '&:hover': {
                background: 'CadetBlue',
            }
        }
    }
}))