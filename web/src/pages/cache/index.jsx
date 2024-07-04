import { Button, Space } from 'antd'
import Axios from 'axios'
function About () {

  const expiresCache = () => {
    Axios.get('/api/cache/expires')
  }

  const strongCache = () => {
    Axios.get('/api/')
  }

  const etagCache = () => {
    Axios.get('/api/cache/etag')
  }

  const sinceCache = () => {
    Axios.get('/api/cache/since')
  }
  return (
    <Space>
      <Button type="primary" onClick={expiresCache}>强缓存 expires</Button>
      <Button type="primary" onClick={strongCache}>强缓存 max-age</Button>
      <Button type="primary" onClick={etagCache}>协商缓存 ETag</Button>
      <Button type="primary" onClick={sinceCache}>协商缓存 Since</Button>
    </Space>
  )
}

export default About;


