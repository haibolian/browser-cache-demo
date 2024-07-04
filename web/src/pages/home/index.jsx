// 直接用函数式组件生成home页面
import Axios from 'axios'
import { useEffect } from 'react';

function Home () {
  useEffect(() => {
    Axios.get('/api')
    .then(res => {
      console.log(res)
    })
  }, [])
  return (
    <div>
      Home
    </div>
  )
}

export default Home;


