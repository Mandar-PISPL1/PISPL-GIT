import React,{useEffect} from 'react'

export default function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>Blogs</div>
  )
}
