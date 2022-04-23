import React from 'react';
import classes from './Post.module.css';





const Post = (props:any) => {
  return (
    <div className={classes.item}>

      <img src='data:image/jpeg;base64,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' />
      {props.message} 
      <div>
        <span> like </span> { props.likesCount }
      </div>
      

    </div>



  )

}

export default Post;