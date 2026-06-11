function postTweet(){
    const tweetInput=document.getElementById("tweetInput");
    const tweetText
    =tweetInput.value.trim();
    if(tweetText===""){
        alert("Please write Something Before Tweeting.")
 return;
    }
    const tweetElement=document.createElement("div");
    tweetElement.className="tweet";
    tweetElement.innerHTML=`
    <div class ="tweet-text">${tweetText}</div>
    <div class="tweet-actions">
 <span class  ="like-btn" onclick="toggleLike(this)">💖Like</span></div>`;
   
const tweetsContainer =document.getElementById("tweetsContainer");
tweetsContainer.prepend(tweetElement);
tweetInput.value="";
}
function toggleLike(btn){
    btn.classList.toggle("liked");
    btn.textContent=btn.classList.contains("liked")?"💖 Liked":"💖 Like";
}