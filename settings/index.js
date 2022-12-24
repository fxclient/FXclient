// LF
function showWins() {
    if (window.localStorage.getItem('win_count') == null) {
        document.getElementById('dr').innerHTML = 'You don\'t have any Wins!';
    } else {
    document.getElementById('dr').innerHTML = 'You have ' + window.localStorage.getItem('win_count') + ' wins!';
    }
}

function removeWins() {
    var confirm1 = confirm('Do you really want to reset your Wins?');
    if (confirm1) {
        localStorage.removeItem('win_count');
        document.getElementById('dr').innerHTML = 'Successfully Reset Your Wins!';
    }
}