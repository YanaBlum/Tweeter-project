
const tweeter = Tweeter() //  logic.js
const renderer = Renderer() 

renderer.renderPosts(tweeter.getPosts()) // rendering the existing posts


// get post's ID function
const getPostId = ($post)=> $post.data().id



// creating a function the posts a post when clicking on the 'Twit's div.
// *the onclick listener is defined in the HTML file
let post = function(){
    let text = $('#input').val()
    tweeter.addPost(text)
    renderer.renderPosts(tweeter.getPosts())
    $('#input').val('')
}


// creating a function + onclick listener to the "delete-post"s buttons: 
const delPost = function(){
    let post = $(this).parent()
    let pId =  getPostId(post)
    tweeter.removePost(pId)
    renderer.renderPosts(tweeter.getPosts())
}

$('#posts').on('click','.delete',delPost)


// creating a function + onclick listener to the "delete-comment"s buttons:
const deleteComment = function(){
    let comment = $(this).closest('p') 
    let cId =  comment.data().id
    let post = comment.parent()
    let pId = getPostId(post)
    tweeter.removeComment(pId,cId)
    renderer.renderPosts(tweeter.getPosts())
}

$('#posts').on('click','.delete-comment', deleteComment)



// creating a function + onclick listener to the "comment-button"s buttons:
const addComment = function(){
    let post = $(this).parent().parent()
    let pId  = getPostId(post) 
    let text = $(this).prev('input').val() 
    tweeter.addComment(text,pId) 
    renderer.renderPosts(tweeter.getPosts())
    $(this).prev('input').val('')
}

$('#posts').on('click','.comment-button', addComment)