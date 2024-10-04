const loadAllPosts=async(category)=>{

// console.log(`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}`:''} `)


    // if(catagories){
    //     console.log(`catagories ${catagories}`);
    // }else{
    //     console.log(`stxhgh`);
    // }
    

    const response= await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}`:''} `);
    const data= await response.json();
    displayAllPosts(data.posts)
}
const displayAllPosts=(posts)=>{
    const postContainer=document.getElementById('post-container');
    posts.forEach(post => {
        const div = document.createElement('div');
        div.innerHTML=`
        <div class="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        
        `;
        postContainer.appendChild(div)
    });
}


loadAllPosts()

const handleSearchByCategory=()=>{
const searchText=document.getElementById('searchPosts').value;

loadAllPosts(searchText);

}