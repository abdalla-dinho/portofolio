import icons from 'url:../../img/icons.svg'
import View from "./view.js";
import previewView from './preview.js';

class bookMarkView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
    _message;
  _errorMessage = 'no bookmarks yet.find a nice recipe and bookmark it ;)';


  addHandler(handler) {
    window.addEventListener('load', e => {
      handler();
     })
  }

  generateMarkup() {
      return this._data.map(bookmark => previewView.render(bookmark,false)).join('');
  }
  
}

export default new bookMarkView();
