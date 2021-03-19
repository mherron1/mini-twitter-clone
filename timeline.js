let users = {
    "user1" : {
        userName: '@elonmusk',
        profileURL: "./?user=user1",
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
        profileURL: "./?user=user2",
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


let allTweets  = [];

for (let key in users){
        users[key].tweets.forEach((tweet)=>{
            allTweets.push({"user" : users[key].displayName, "handle" : users[key].userName, "profile" : users[key].avatarURL, "profileURL" : users[key].profileURL, "tweet" : tweet })
        })
       
    }

    allTweets.sort((a, b)=>{
        if (a.tweet.timestamp.getTime > b.tweet.timestamp.getTime){
            return -1;
        }else{
            return 1
        }
    })

console.log(allTweets)

allTweets.forEach((item)=>{

    let tweetContainer = document.querySelector('.tweetContainer');
    
        tweetContainer.innerHTML += `
        <div class="tweet">
                    
        <img class="tweetImage" src="${item.profile}"/> 
        <img src=>
        <div class="tweetBody">
            <p class="moreInfo grey">...</p>
            <div class="tweetBodyInner">
               <a href="${item.profileURL}"><h4>${item.user} <img class="verifiedIconTweet" src="twitterVerified.jpg"></h4></a>
               <p>${item.handle}</p>
               <p>${item.tweet.timestamp}</p>
               
            </div>
            
            <p>${item.tweet.text}</p>
            
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



