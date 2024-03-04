const loadPosts = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    // const posts = data.posts ; 
    const posts = data.posts;
    displayPosts(posts);

}

const displayPosts = posts => {
    // console.log(posts);

    const postContainer = document.getElementById('post-container');

    posts.forEach(post => {
        console.log(post);
        // create a div
        const postCard = document.createElement('div');
        postCard.classList = `card card-side bg-[#F3F3F5] shadow-xl`;
        // set innerhtml
        postCard.innerHTML = `
        <div class="flex p-10 gap-4">
            <div>
                <figure><img class="h-[72px] w-[72px] rounded-2xl"
                        src="${post.image}"
                        alt="Movie" /></figure>
            </div>
            <div class="flex flex-col gap-4">
                <div class="flex text-[16px] gap-6">
                    <p># Music</p>
                    <p>Author : Awlad Hossain</p>
                </div>
                <h2 class="card-title text-[20px] font-bold">10 Kids Unaware of Their
                    Halloween Costume</h2>
                <p class="text-[16px] ">It’s one thing to subject yourself to ha
                    Halloween costume mishap because, hey that’s your prerogative</p>
                <!-- dashed line -->
                <div
                    class="relative flex items-center w-[335px] h-[1px] md:container md:mx-auto">
                    <div class="flex-grow border-t border-dashed border-gray-400"></div>
                </div>
                <div class="flex justify-between ">
                    <div class="flex gap-4">
                        <div class="flex gap-1">
                            <img src="images/message.png" alt="">
                            <p class="text-[16px] ">${post.comment_count}</p>
                        </div>
                        <div class="flex gap-1">
                            <img src="images/eye.png" alt="">
                            <p class="text-[16px]">${post.view_count}</p>
                        </div>
                        <div class="flex gap-1">
                            <img src="images/clock.png" alt="">
                            <p class="text-[16px]">${post.posted_time}</p>
                        </div>
                    </div>
                    <button class="justify-end">
                        <img src="images/grm.png" alt="">
                    </button>
                </div>
            </div>
        </div>
        `;

        // append child
        postContainer.appendChild(postCard);
    });
}

loadPosts();