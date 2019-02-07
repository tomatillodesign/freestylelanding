import React, { Component } from 'react';
import './App.css';
import ComplexPostCard from './ComplexPostCard.js';

let website = 'https://freestyleadventuretravel.com';

class Posts extends Component {

    constructor() {
    super();

        this.state = {
            allPostTitles : false,
            posts: [],
            //dataRoute: website + '/wp-json/wp/v2/trips?specials=111',
            //dataRoute: website + '/wp-json/wp/v2/trips?specials=111&orderby=title&order=asc&start_date_php=1547251200',
            //dataRoute: website + '/wp-json/wp/v2/trips?specials=111&per_page=3',
            dataRoute: website + '/wp-json/wp/v2/posts?per_page=3',
        }

    }


    componentDidMount(){
        fetch(this.state.dataRoute)
        .then(res => res.json())
        .then(posts => this.setState((prevState, props) => {
            return { posts: posts.map(this.mapPosts)};
        }));
    }


    mapPosts(post){
        // console.log(post); FOR TESTING PURPOSES
        return {
          id: post.id,
          date: new Date(post.date).toLocaleDateString(),
          entryExcerpt: post.excerpt.rendered,
          entryContent: post.content.rendered,
          title: post.title.rendered,
          link: post.link,
          // specialMessage: post.trip_meta_fields.special_message[0],
          // startDateRaw: post.trip_meta_fields.start_date_php[0],
          // endDateRaw: post.trip_meta_fields.end_date[0],
          // startingAt: post.trip_meta_fields.starting_at,
          specialMessage: '',
          startDateRaw: '',
          endDateRaw: '',
          startingAt: '',
          featuredMedia: post.jetpack_featured_media_url,
        }
    }



    render() {

        return (
        <div className="Posts">

          {this.state.posts.map((post, index) =>
            <div className="clb-trip-card" key={`post-${post.id}}`}>
                <ComplexPostCard index={index} link={post.link} entryTitle={post.title} date={post.date} entryExcerpt={post.entryExcerpt} entryContent={post.entryContent} entrySpecialMessage={post.specialMessage} entryStartDate={post.startDateRaw} entryEndDate={post.endDateRaw} startingAt={post.startingAt} featuredMedia={post.featuredMedia} />
            </div>
          )}

        </div>);

    }

}


export default Posts;
