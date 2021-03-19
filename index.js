let users = {
            "user1" : {
                userName: '@elonmusk',
                displayName: 'Elon Musk',
                joinedDate: 'June 2009',
                followingCount: 103,
                followerCount: 47900000,
                avatarURL: 'assets/elonmusk.jpg',
                coverPhotoURL: 'assets/elonmusk-cover.jpeg',
                tweets: [
                    {
                      text: 'I admit to judging books by their cover',
                      timestamp: '2/10/2021 00:01:20'
                    },
                    {
                        text: 'Starship to the moon',
                        timestamp: '2/09/2021 18:37:12'
                    },
                    {
                        text: 'Out on launch pad, engine swap underway',
                        timestamp: '2/09/2021 12:11:51'
                    }
                ]
            },
            "user2" : {
                userName: '@BillGates',
                displayName: 'Bill Gates',
                joinedDate: 'June 2009',
                followingCount: 274,
                followerCount: 53800000,
                avatarURL: 'assets/billgates.jpg',
                coverPhotoURL: 'assets/billgates-cover.jpeg',
                tweets: [
                    {
                        text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
                        timestamp: '2/10/2021 00:01:20'
                    },
                    {
                        text: 'Should I start tweeting memes? Let me know in a comment.',
                        timestamp: '2/09/2021 18:37:12'
                    },
                    {
                        text: 'In 2020, I read a book every hour.',
                        timestamp: '2/09/2021 12:11:51'
                    }
                ]
            }
}




let user = users.user1;


let query = location.search.split("=")[1];

if (query = location.search.split("=")[1]){
    user = users[query]
}






let container = document.querySelector('.container');
container.innerHTML = `
        <div class="header">
             <div class="headerArrow"><a href="/timeline.html">⇽</a></div>
             <div>
                <h2 class="profile-name">${user.displayName} <img class="verifiedIcon" src="twitterVerified.jpg"></h2>
                <p class="grey">13.6k Tweets</p>
             </div>
         </div>

         <div class="cover"></div>

         <div class="profile">

             <img class="profilePic" src="${user.avatarURL}"/> 
             <button class="follow">Following</button>
             <h2 class="profile-name">${user.displayName} <img class="verifiedIcon" src="twitterVerified.jpg"></h2>
             <p class="handle grey">${user.userName}</p>
             <p class="joined grey"> <i class="fa fa-calendar"></i> Joined ${user.joinedDate}</p>

             <div class ="followerInfo">
                <p class="numFollowing grey"><strong class="black">${user.followingCount}</strong> Following</p> 
                <p class="numFollowers grey"><strong  class="black">${user.followerCount/1000000}m</strong>  Followers</p> 
                     
             </div>

             <div class="tabs">
                 <a href = "#" class ="tab"><p>Tweets</p></a>
                 <a href = "#" class ="tab"><p>Tweets & replies</p></a>
                 <a href = "#" class ="tab"><p>Media</p></a>
                 <a href = "#" class ="tab"><p>Likes</p></a>
             </div>

         </div>
         <div class="tweetContainer">


         </div>`;


      

let tweetContainer = document.querySelector('.tweetContainer');
user.tweets.forEach((tweet)=>{
    tweetContainer.innerHTML += `
    <div class="tweet">
                
    <img class="tweetImage" src="${user.avatarURL}"/> 
    <img src=>
    <div class="tweetBody">
        <p class="moreInfo grey">...</p>
        <div class="tweetBodyInner">
           <h4>${user.displayName} <img class="verifiedIconTweet" src="twitterVerified.jpg"></h4>
           <p>${user.userName}</p>
           <p>${tweet.timestamp}</p>
        </div>
        
        <p>${tweet.text}</p>
        <div class="tweetActions grey">
        <a href="#"><p> <i class="fa fa-comment-o"></i> 52k</p></a>
        <a href="#"><p><i class="fa fa-retweet" aria-hidden="true"></i> 77k</p></a>
        <a href="#"><p><i class="fa fa-heart"></i> 65.2k</p></a>
        <a href="#"><p><i class="fa fa-share-square-o"></i></p></a>
        </div>
        
    </div>
                         
 </div>
    `
})


document.querySelector('.cover').style.backgroundImage = `url("${user.coverPhotoURL}")`;