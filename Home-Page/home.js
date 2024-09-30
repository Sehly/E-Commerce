var userName = localStorage.getItem('userName');
var heading = document.getElementById('heading1');
heading.textContent = 'Welcome, ' + userName;
var images = [ 'img4.jpg' , 'pexels-828860-2697787.jpg' ,'pexels-karolina-grabowska-5624981.jpg' ,'pexels-miloyoung-3602258.jpg','img1.jpg', 'img2.jpg', 'img3.jpg'];



var currentIndex = 0;
var baseValue = document.getElementById('img0');
function showImage(index) {
    baseValue.src = images[index];
}
function nextImg() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}
function previousOne() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}
    showImage(currentIndex);
function upPage() {
    window.scrollTo({
        top: 0,
    });
}
