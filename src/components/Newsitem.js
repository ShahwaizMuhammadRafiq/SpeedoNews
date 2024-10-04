import React from "react";

const Newsitem = (props) => {

    let { title, description, imageurl, newsUrl, author ,date , source} = props;
    return (
      <div className="my-3">
        <div className="card">
         <div style={{display:"flex",justifyContent:'flex-end',position:"absolute",right:"0"}}><span className="badge round-pill bg-dark">{source}</span></div>
          <img src={!imageurl?"https://dims.apnews.com/dims4/default/f43b9a5/2147483647/strip/true/crop/2880x1620+0+150/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd4%2F34%2F436cae4364e53db1e844d30216f8%2Fd9fdceef95264454a5e619750cde3b1d":imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author} on  {new Date (date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl}  target="_blank" className="btn btn-sm btn-dark">
              ReadMore
            </a>
          </div>
        </div>
      </div>
    );
  }


export default Newsitem;
