import React from "react";
import { useEffect,useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
// import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
      const [results, setResults] = useState([]);
      const [loading, setLoading] = useState(true);
      // const [page, setPage] = useState(1);
      const [totalResults, setTotalResults] = useState(0);


  const updateNews = async ()=>{
    props.setProgress(0);
    const url = `https://newsdata.io/api/1/news?apiKey=${props.apikey}&country=${props.country}&category=${props.category}`;
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setResults(parsedData.results);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);

  }

  useEffect(() => {
    updateNews()
    //eslint-disable-next-line
  }, [])
  
   const fetchMoreData = async() => {
    const url = `https://newsdata.io/api/1/news?apiKey=${props.apikey}&country=${props.country}&category=${props.category}`;
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    // setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setResults(results.concat(parsedData.results));
    setTotalResults(parsedData.totalResults);
  };



    // console.log("Page: ", page);
console.log("Total Results: ", totalResults);
    let {titlehead} = props;
    return (
      <>
        <h1 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}}>{titlehead}</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          key="infinte"
          dataLength={results.length}
          next={fetchMoreData}
          hasMore={results.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container" >
        <div className="row">
          {Array.isArray(results) && results.map((element) => {
            return (
              <div className="col-md-4"  key={element.link}>
                <Newsitem
                  title={element.title?element.title:""}
                  description={element.description?element.description:"" }
                  imageurl={element.image_url}
                  newsUrl={element.link}
                  author={element.creator?element.creator:"Unknown"}
                  date={element.pubDate}
                  source={element.source_name}
                />
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    );
  }



export default News;
