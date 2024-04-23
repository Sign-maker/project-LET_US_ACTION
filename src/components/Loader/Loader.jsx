import css from './Loader.module.css'

const Loader = ({children}) => {
  return (
    <div className={css.backdrop}>
      <div className={css.loader}>{children}</div>
    </div>
  )
}

export default Loader