
const Post = require('../models/posts');


module.exports = {
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

        console.log( fpost); 

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

            await fpost.save()
            res.json({ message: "Successful" });

        } else {
            res.status(403).send({ message: 'You do not have perms to delete' });
        }

    }
}