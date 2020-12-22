import React from "react"
import styles from "./FormsControls.module.css"

export const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
            <span className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <span>
        {props.children}
      </span>
                {hasError && <div className={styles.textError}>{meta.error}</div>}
    </span>
    )
}

export const Textarea = (props) => {
  const {input, meta, ...restProps} = props;

  return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
  const {input, meta, ...restProps} = props;

  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}
