// genarets 'nodelist' called 'inputs'
const inputs = document.querySelectorAll('.controls input');

function handlepdate(){
    // The dataset read-only property of the HTMLElement interface provides read/write access to custom data attributes (data-*) on elements. It exposes a map of strings (DOMStringMap) with an entry for each data-* attribute.

    // dataset is an object that contains all custon data specific attributes from that element
    // in this case suffix will be 'px' in case of blur and spacing input
    const suffix = this.dataset.sizing || '';
    // changing value of root variables
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    // console.log(this.value);
}

inputs.forEach(input => input.addEventListener('change',handlepdate));
inputs.forEach(input => input.addEventListener('mousemove',handlepdate));