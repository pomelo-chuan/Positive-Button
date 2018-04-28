var COLOR = {
    'Normal': '#b2ebf2',
    'Grey': '#f5f5f5',
    'Red': '#ffcdd2',
    'Blue': '#b3e5fc',
    'Green': '#c8e6c9',
    'Pink': '#fce4ec',
    'yellow': '#ffecb3',
    'black': '#f5f5f5',
    'White': '#cfd8dc',
};

window.onload = function () {
    document.getElementById('square').addEventListener('click', e => {
        var color = e.path[0].innerHTML;
        document.getElementsByTagName('body')[0].style.backgroundColor = COLOR[color];
    })
};
