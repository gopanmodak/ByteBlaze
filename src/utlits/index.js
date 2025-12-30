import toast from "react-hot-toast";

export const getBlogs=()=>{
    let blogs=[]

    const getStoredBlogs=localStorage.getItem('blogs')
    if(getStoredBlogs){
        blogs=JSON.parse(getStoredBlogs)
    }
    return blogs;
}

export const saveBlogsToDb=(blog)=>{
    let blogs=getBlogs();
    const isExist=blogs.find(b=>b.id===blog.id)
    if(isExist){
        return toast.error('Blog already bookmarked')
    }

    blogs.push(blog)
    localStorage.setItem('blogs',JSON.stringify(blogs))
    toast.success('Blog bookmarked successfully')
}

export const removedBlog=(id)=>{
    let blogs=getBlogs();
    const remainingBlogs=blogs.filter(b=>b.id!==id)
    localStorage.setItem('blogs',JSON.stringify(remainingBlogs))
    toast.success('Blog removed successfully')
}