import React, { useEffect,useRef  } from 'react';
import { Link } from 'react-router-dom';


const Blog = ({ posts, totalPage, currentPage, setcurrentPage }) => {
  
  const Totalpage = totalPage / 6;
  const pg = Math.round(Totalpage) + 1;
  const containerRef = useRef(null);
  console.log(currentPage)
  useEffect(() => {
    document.title = "PISPL Blogs | Parikh Info Solutions"
    containerRef.current.scrollTo(0, 0);
    window.scrollTo(0, 0);
  }, [currentPage]);

  const buttonstyle = {
    color: "#0d2366",
    backgroundColor: "#49dab5",
    fontSize: "20px",
    border: "1px",
    padding: "3px 22px"
  }
  const jsonData = {
    authors: [
      { id: 4, name: "Dipti Valanju" },
      { id: 5, name: "Prerna Topre" },
      { id: 10, name: "shifa_pispl" },
      { id: 12, name: "Sandili Patkar" },
      { id: 14, name: "Rashi Kapoor" },
      { id: 16, name: "pispl team" },
      { id: 19, name: "Vedant Maheshwari" },
      { id: 20, name: "Kashish Kanada" },
    ],
  };


  return (
    <>
      <div className='container-fluid ' style={{ backgroundColor: "var(--mainColor)", color: "var(--textColor)" }} >
        <div className='d-flex justify-content-center align-items-center flex-column' style={{ padding: "30px 0px" }}>
          <h1 className='fw-bold text-center' style={{ fontSize: "45px" }}>Grow Your Business</h1>
          <div className='my-4 ' style={{ width: "40px", backgroundColor: "#49dab5", height: "5px" }}></div>
          <p className='text-center mb-5' style={{ fontSize: "22px", fontWeight: "300", maxWidth: "788px" }}>Get new updates direct to your inbox. 💌 To help you get the most out of through the globalization.</p>
          <div className='d-flex justify-content-center' style={{ textAlign: 'center' }}>
            <form className='d-flex'>
              <input placeholder='Your Email' style={{ color: "#49dab5", backgroundColor: "#0d2366", border: "1px solid #49dab5", padding: "2px 5px", fontSize: "20px", padding: "2px 5px" }}></input>
              <button style={buttonstyle}>SUBSCRIBE</button>
            </form>

          </div>
          <p className='mt-4'>✅ Don’t worry! We hate SPAM just as much as you do.</p>

        </div>


      </div>
     
      <div className='container-fluid' ref={containerRef}>
        <div className='row px-md-5 py-4 mx-md-5 m-0'>

          {
            posts.map((post) => {
              const author = jsonData.authors.find((author) => author.id === post.author); // Find the author object from the authors array based on author ID
              const authorName = author ? author.name : "Unknown Author"; // Get the author name or display "Unknown Author" if author not found
              const date = new Date(post.date);

              // Define the options for the desired date format
              const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              };

              // Format the date using the options
              const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

              // Output the formatted date
              console.log(formattedDate);
              return (
                <div key={post.id} className='col-md-6 col-12 d-flex justify-content-center p-3' >


                  <Link to={`/blogs/${post.slug}`}>
                    <div className='p-2 rounded my-1' style={{ boxShadow: "0px 0px 10px -1px rgba(0,0,0,0.5)", height: "100%" }}>

                      <div className="card border-0">

                        <img src={post._embedded['wp:featuredmedia'][0].source_url} className="card-img-top" alt="..." style={{width:"555px",height:"290px",objectFit:"contain"}}/>

                        <div className="card-body px-0" >
                          <h2 style={{ fontWeight: "600", fontSize: "20px", color: "#0d2366", padding: "0px 0px" }}>{post.title.rendered}</h2>
                          <p style={{ color: "#49dab5", fontSize: "13px" }}>{authorName} | {formattedDate} </p>
                          {/* <p style={{fontSize:"16px"}}>{blog.attributes.blogDesc}</p> */}
                          <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
                        </div>

                      </div>

                    </div>
                  </Link>

                </div>

              )
            })
          }





        </div>
      </div>
      {/* Pagination */}
      <div className='d-flex justify-content-around my-4'>
        <button style={{ color: "#e43765", border: "0px", backgroundColor: "white", fontSize: "20px" }} disabled={currentPage === 1} onClick={() => { setcurrentPage(currentPage - 1) }}>« Previous</button>
        <span>{currentPage} of {pg}</span>
        <button style={{ color: "#e43765", border: "0px", backgroundColor: "white", fontSize: "20px" }} disabled={currentPage === totalPage} onClick={() => { setcurrentPage(currentPage + 1) }}>Next »</button>

      </div>
    </>

  );
};

export default Blog;