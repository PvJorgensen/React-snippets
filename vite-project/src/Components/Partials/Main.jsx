import styles from './Main.module.scss'
export const Main = ({children}) => {
  return 
    <div className={styles.mainContent}>{children}</div>
  
}
