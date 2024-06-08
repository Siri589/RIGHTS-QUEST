document.getElementById('playButton').addEventListener('click', function() {
    var videoContainer = document.getElementById('videoContainer');
    var videoPlayer = document.getElementById('videoPlayer');
    
    videoContainer.style.display = 'block';
    videoPlayer.play();
});
