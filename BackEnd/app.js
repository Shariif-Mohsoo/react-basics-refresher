import express from 'express';
import bodyParser from 'body-parser';

import {getStoredPosts,storePosts} from './data/posts.js';

const app = express();

app.use(bodyParser.json());


app.use((req,res,next)=>{
    // Attach CORS headers
    // Required when using a detached backend (that runs on a different domain)
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    next();
});

app.get('/posts',async (req,res)=>{
    const storedPosts = await getStoredPosts();
    res.json({posts:storedPosts});
});

app.get('/posts/:id',async (req,res)=>{
    const storedPosts = await getStoredPosts();
    const post = storedPosts.find((post)=> post.id === req.params.id);
    res.json({post});
})

app.post('/posts',async (req,res)=>{
    const existingPosts = await getStoredPosts();
    const postData = req.body;
    const newPost = {
        ...postData,
        id:Math.random().toString()
    }
    const updatedPosts = [newPost,...existingPosts];
    await storePosts(updatedPosts);
    // mohsoo check / compare the below written line with the remote line
    res.status(201).json({message:'Stored New Post', posts:newPost});
})

app.listen(8080,()=>{
    console.log('Listening at port 8080');
})