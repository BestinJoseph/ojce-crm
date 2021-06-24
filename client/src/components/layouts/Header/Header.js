import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
    header: {
        backgroundColor: 'blue',
        color: 'white',
        padding: '.35rem 1rem',
        display: 'flex',
        justifyContent: 'space-between',

        '& .title': {
            fontSize: '1.25rem',
            fontWeight: '400',
        },

        '& .list': {
            listStyle: 'none',
            display: 'flex',
            
            '& li': {

                '& a': {
                    color: 'white',
                    textDecoration: 'none',

                    '&:hover': {
                        textDecoration: 'underline',
                    }
                }
            }
        }
    }
}))