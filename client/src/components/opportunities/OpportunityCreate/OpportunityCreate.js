import { makeStyles } from "@material-ui/core"

export default makeStyles(() => ({
    opportunitycreate: {
        margin: '2rem auto 0 auto',
        width: '30vw',
        padding: '2rem',

        '& .form': {

            '& .headerText': {
                margin: '0 0 1.25rem 0',
                fontSize: '1.5rem',
            },

            '& .textfield': {
                marginBottom: '1.25rem',
            },

            '& .btn': {
                marginTop: '.5rem',
            },

            '& .contactsarray': {
                margin: '1rem 0',
                // border: '1px solid yellow',

                '& .contactTitle': {
                    margin: '0',
                    fontSize: '1.05rem',
                    fontWeight: 'normal'
                },

                '& .contact': {
                    // border: '1px solid gray',
                    padding: '1rem 1.5rem 2.5rem 1.5rem',
                    margin: '2rem 0 0 0',

                    '& .contactHeader': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '1rem',

                        '& .deleteButton': {
                            padding: '.35rem',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            border: '1px solid red',

                            '&:hover': {
                                background: 'red',
                                border: '1px solid red',
                            }
                        },

                        '&:last-child': {
                            marginBottom: '0',
                        }
                    },

                    '& .contactTitle': {
                        margin: '0',
                    },
                },

                '& .addButton': {
                    padding: '1rem',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    border: '1px solid gold',
                    marginTop: '1rem',

                    '&:hover': {
                        background: 'gold',
                        border: '1px solid gold',
                    }
                }
            }
        }
    }
}))