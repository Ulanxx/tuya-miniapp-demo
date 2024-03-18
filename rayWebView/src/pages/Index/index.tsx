import { Button, View, router } from '@ray-js/ray'
import React, { FC } from 'react'

import styles from './index.module.less'

const Home: FC = () => {
  return (
    <View className={styles['container']}>
      <Button
        type="primary"
        className={styles.btn}
        onClick={() => {
          router.push('/webView')
        }}
      >
        WebView
      </Button>
      <Button
        type="primary"
        className={styles.btn}
        onClick={() => {
          router.push('/webViewError')
        }}
      >
        WebView Error
      </Button>
      <Button
        type="primary"
        className={styles.btn}
        onClick={() => {
          router.push('/openInnerH5')
        }}
      >
        OpenInnerH5
      </Button>
    </View>
  )
}

export default Home
