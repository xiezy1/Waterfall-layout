class Wallpaper {
    constructor({ el, col, itemEl, gutter }) {
        this.el = el && document.querySelector(el)
        this._arr = []
        this.col = col
        this.gutter = gutter
        this.imageList = itemEl && document.querySelectorAll(itemEl)
        this.imageListLength = this.imageList.length
        this.imageWidth = (this.el.offsetWidth - (this.col - 1) * this.gutter) / this.col
        console.log(this.col);
        this.init()
    }
    init() {
        this.setImgPosition()
    }

    getMinHeight(value) {
        let _arr = value.map(item => item.height)
        let minValue = Math.min(..._arr)
        return _arr.findIndex(i => i == minValue)
    }
    setImgPosition() {
        for (let i = 0; i < this.imageListLength; i++) {
            let item = this.imageList[i]
            item.style.width = this.imageWidth + 'px'
            if (i < this.col) {
                item.style.top = '0px'
                let itemLeft = i * item.offsetWidth + i * this.gutter
                item.style.left = itemLeft + 'px'
                this._arr.push({
                    height: item.offsetHeight + this.gutter,
                    left: itemLeft
                })
            } else {
                let minIndex = this.getMinHeight(this._arr)
                let { height, left } = this._arr[minIndex]
                this._arr[minIndex] = { height: item.offsetHeight + height + this.gutter, left }
                item.style.top = height + 'px'
                item.style.left = left + 'px'
            }
        }
    }


    render({ col, gutter }) {
        this.col = col
        this.gutter = gutter
        this._arr = []
        this.imageWidth = (this.el.offsetWidth - (this.col - 1) * this.gutter) / this.col
        this.setImgPosition()
    }

}