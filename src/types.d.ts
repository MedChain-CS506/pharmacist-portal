//* Here, we'll provide types which can be accessed globally
type SignInDialog = {
    dialogProps: {
        open: boolean,
        onClose?: () => void
    }
}

type SignUpDialog = {
    dialogProps: {
        open: boolean,
        onClose?: () => void
    }
}