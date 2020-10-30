export default function tableFill() {
    let date = new Date(1992, 3, 24)
    let age = ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
    let tdAge = document.getElementById('age');
    tdAge.children[1].innerHTML = `${age} лет (${date.getDate()} марта ${date.getFullYear()}г.)`;
     

}