import React from 'react';

const BlogCopy = () => {
   

    const wql_query= { query: ` {
      posts{
        edges{
          node{
            title
            
          }
        }
      }
    }`
    }

    fetch('https://parikhinfosolutions.com/graphql',{
      method:'POST',
      headers: { 'Content-Type':'application/json'},
      body: JSON.stringify(wql_query)
    }).then(res=> res.json())
    .then(json=>{
      console.log("======")
      console.log(json.data.posts.edges)
    })


   
    

    return (
        <>
            heelo
        </>

    );
};

export default BlogCopy;