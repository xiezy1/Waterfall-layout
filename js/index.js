window.onload = function () {
    let wallpaper = new Wallpaper({
        el: '.container',
        itemEl: '.img',
        col: 6,
        gutter: 20
    })

    const sidebarDom = document.querySelector('.sidebar'),
        sideTracks = Array.from(document.querySelectorAll('input'))
    document.querySelector('.closed').addEventListener('click', function () {
        sidebarDom.classList.toggle('hide')
    })


    sideTracks.forEach(item => {
        item.addEventListener('change', inputTrackChange, false)
    })
    console.log(sideTracks[0].value);

    function inputTrackChange(e) {
        let _dom = e.target
        let _data = {
            col: sideTracks[0].value * 1,
            gutter: sideTracks[1].value * 1
        }
        if (_dom.id == 'colInput') _data['col'] = e.target.value * 1
        if (_dom.id == 'gutterInput') _data['gutter'] = e.target.value * 1
        wallpaper.render(_data)
    }
}