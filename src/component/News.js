import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
 


 const [articles, setArticles] = useState([ ])
 const [page, setPage] = useState(1)
 const [totalResult, setTotalResult] = useState(0)
 const [loading, setLoading] = useState(true)


   
 const  capitalize = (element) => {
  return  element.charAt(0).toUpperCase() + element.slice(1);
 
 }
   
    // document.title = `NewsMonkey-${capitalize(props.category)}`;
  
  

  const update = async () =>  {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=673888ce8e9a46088243556ca162ab66&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(40);

      await   loading
    let data = await fetch(url);

    let dataJson = await data.json();
    props.setProgress(70)
  
     setArticles(dataJson.articles)
     setLoading(false)
     setTotalResult(dataJson.totalResults)

    props.setProgress(100)
  
  }

   useEffect(() => {

   
     
     update();
   }, [])

  // priveas = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.update();
  // };

  // Next = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.update();
  // };


   const fetchMoreData = async () => {
     setPage( page+1)
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=673888ce8e9a46088243556ca162ab66&page=${page+1}&pageSize=${props.pageSize}`;
  
    let data = await fetch(url);

    let dataJson = await data.json();

   setArticles(articles.concat( dataJson.articles))
   setTotalResult(dataJson.totalResults)

   ;
  
  }

  

  
    return (
     
             <>
        <h1 className="text-center" style={{ margin: "35px 0" ,marginTop:'90px'}}>
          NewsMonkey - Top {capitalize(props.category)} Headline
        </h1>
          
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResult}
          loader={ <Spinner /> }
        >
          <div className="container my-3 ">
        {/* {this.state.loading && <Spinner />} */}
        <div className="row">
          {
            articles.map((element) => {
              return (
                <div  className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    time={element.publishedAt.slice(0, 10)}
                    link={element.url}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>

        {/* <div className="container  d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.priveas}
          >
            &#8592;priveas
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResult / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.Next}
          >
            Next&#8594;
          </button> */}
        
      
      </>
    );
  };


export default News;


News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
};

