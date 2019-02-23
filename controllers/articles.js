
const Post = require('../models/posts');


module.exports = {

    addArticle: async ( req, res, next ) => {

        const user = req.body.uid;
        const titl = req.body.titl;
        const head = req.body.head;
        const text = req.body.txt;

        var d = new Date();

        const fuser = await User.findOne({ googleid: user }); // Find user
        
        if( fuser.group < 1 ) {
            res.status(403).send({ error: 'You do not have perms to post' });
        } else {

            const newArticle = new Post({
                date: d,
                author: fuser.googleid,
                title: titl,
                header: head,
                body: text,
            })

            await newArticle.save();
            res.json({ message: newArticle });
        }

    },

    removeArticle: async ( req, res, next ) => {
        
        const post = req.body.pid;
        const user = req.body.uid;

        const fuser = await User.findOne({ googleid: user }); // Find user
        const fpost = await Post.findOne({ _id: post });

        if( !( fuser.group < 2 ) || fpost.author == uid ) {
            await Post.findByIdAndDelete( fpost.id );
            res.json({ message: "Successful" });
        } else {
           
            res.status(403).send({ message: 'You do not have perms to delete' });
        }

    },

    editArticle: async ( req, res, next ) => {
        
        const titl = req.body.titl;
        const head = req.body.head;
        const text = req.body.txt;
        const user = req.body.uid;
        const post = req.body.pid;

        const fuser = await User.findOne({ googleid: user }); // Find user
        const fpost = await Post.findOne({ _id: post });

        console.log( "**************** " + text); 

        if( !( fuser.group < 2 ) || fpost.author == uid ) {
            
            if( titl != null ) {
                fpost.title = titl;
            }

            if( head != null ) {
                fpost.header = head;
            }

            if( text != null ) {
                fpost.body = text;
            }

            fpost.edit = new Date();

            if( fuser.group < 2 ) { fpost.approval = false }

            await fpost.save()
            res.json({ message: "Successful" });

        } else {
            res.status(403).send({ message: 'You do not have perms to edit' });
        }

    },

    approveArticle: async ( req, res, next ) => {

        const user = req.body.uid;
        const pid = req.body.uid;

        const fuser = await User.findOne({ googleid: user }); // Find user
        const fpost = await Post.findOne({ _id: pid });

        if( fpost.approval == true ) {
            res.status(403).send({ message: 'Post is already approved' });
        } else {
            if( fuser.group > 1) { 
                fpost.approval = true;
                await fpost.save()
                res.json({ message: "Successful"});
            } else {
                res.json({ message: "You don't have perms to approve posts"});
            }
        }


    }

}