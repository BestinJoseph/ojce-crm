import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    login: {
        width: '50rem',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5rem',

        '& .form': {
            width: '25rem',
            padding: '2rem',

            '& .formTitle': {
                marginBottom: '1.5rem',
            },

            '& .textField': {
                marginBottom: '1rem',
            },

            '& .formButton': {
                margin: '1rem 0'
            }
        }
    }
}))