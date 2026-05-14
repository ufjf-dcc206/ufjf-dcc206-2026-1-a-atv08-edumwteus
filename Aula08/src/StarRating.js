export default class StarRating extends HTMLElement {
    constructor() {
        super()
        console.log("Star Rating created!");
    }
}

customElements.define("star-rating", StarRating);