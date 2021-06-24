import { makeStyles } from "@material-ui/core"

export default makeStyles(() => ({
    company: {
        margin: '0 2rem',

        '& .create': {
            marginTop: '1.5rem',
            background: 'blue',
            color: 'white',
            textDecoration: 'none',
            padding: '1rem',
            display: 'inline-block',
        }
    }
}))