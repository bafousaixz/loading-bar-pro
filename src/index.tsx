import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  time: number
  color: string
  width?: number
  height?: number
  borderRadius?: number
  borderColor?: string
}

export const LoadingBarComponent = (props: Props) => {
  const { time, borderRadius, width, height, color, borderColor } = props
  const [start, setStart] = React.useState(false)

  const stylebar = {
    borderRadius: `${borderRadius}px`,
    border: `1px solid ${borderColor}`,
    width: `${width}px`,
    height: `${height}px`
  }

  const loadingStyle = {
    transition: `${time / 1000}s`,
    background: color
  }

  React.useEffect(() => {
    setStart(true)
  }, [])

  return (
    <div className={styles.wrapper} style={stylebar}>
      <div
        className={`${styles.loading} ${start && styles.startLoading}`}
        style={loadingStyle}
      >
        <p className={styles.text}>Delay: {time}</p>
      </div>
    </div>
  )
}
