import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
    singleopportunity: {
        margin: '0 auto',
        width: '1200px',
        paddingTop: '2rem',
    },

    dataValue: {
        borderBottom: '1px solid Gainsboro',
        marginBottom: '.65rem',
        paddingBottom: '.65rem',

        '& span': {
            fontWeight: 'bold', 
            fontSize: '1rem', 
            marginLeft: '0.5rem', 
            textTransform: 'uppercase',
        },
    },

    dataValueLast: {
        marginBottom: '.5rem',
        paddingBottom: '.5rem',

        '& span': {
            fontWeight: 'bold',
            marginLeft: '0.5rem', 
            textTransform: 'uppercase',
        },
    }
}))