import styles from "./FormControls.module.css"


export const FormControl = ({input,meta, ...restProps}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: "")}>
            <div>
                {restProps.children}
            </div>
            <div>
                {hasError && <span>{meta.error}</span> }
            </div>
        </div>

    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}> <textarea {...input} {...restProps}/></FormControl>

    )
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}> <input {...input} {...restProps}/></FormControl>

    )
}