import { useEffect } from "react";
import Axios from 'axios'
function Category () {
  useEffect(() => {
    Axios.get('/api/category')
  }, [])
  return (
    <div>
      Category
    </div>
  )
}

export default Category;


