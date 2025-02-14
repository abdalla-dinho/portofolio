import View from 'Views.js';
// import icons from 'url:../../img/icons.svg'

class resultCountView extends View {
    _parentElement = document.querySelector('.result--length');

    generateMarkup() {
        return `
           <button class="result-count--btn">${this._data.resultCount}</button>
        `

    }
    
};

export default new resultCountView();