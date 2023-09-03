const button = getButton ()
const shuffleButton = document.getElementById("shuffle")

button?.addEventListener ("click",handleClick)
shuffleButton?.addEventListener("click",shufflesStories)

function getFormValues(){
    const noun = document.getElementById("noun").value
    const adjective = document.getElementById("adjective").value
    const person = document.getElementById("person").value
    const verb = document.getElementById("verb").value
     const place = document.getElementById("place").value
     return{
        noun:noun,
        adjective:adjective,
        person:person,
        verb:verb,
        place:place,
     }
}

function handleClick(e){
   shufflesStories(e, true)

}

function shufflesStories(e,isFirstStory = false){
    e.preventDefault()
    const{noun,adjective,person,verb,place} = getFormValues()
    if([noun,adjective,person,verb,place].includes(""))return

    const randomNumber = generateRandomNumber()//1,2,3 or 3
    const stories = [writeStory(), writeStory2(), writeStory3()]
    const story = isFirstStory? stories[0]: stories[randomNumber]
    appendStoryToPage(story)
}
function generateRandomNumber(){
    return Math.floor(Math.random() * 3)
}

function appendStoryToPage(story){
    const paragraph = document.getElementById("story")
    const span = document.createElement("span")
    span.innerText = story
    paragraph.textContent = ""
    paragraph.appendChild(span)
}
function writeStory(){
    const{noun,adjective,person,verb,place} = getFormValues()
   return`I ike to look at ${noun}s, I think that they are ${adjective}.My favorite
   person is ${person}. We often ${verb} togther when are in ${place} `
}

function writeStory2(){
    const{noun,adjective,person,verb,place} = getFormValues()
   return`I hate  ${noun}s, I think that they are ${adjective}.I especilly hate
   We never ${verb}.I am in in ${place}`
}

function writeStory3() {
    const {noun,adjective,person,verb,place} = getFormValues()
    return `When I am ${place}, I look at the people there and I find them ${adjective}. If I 
    cound meet someone it would be ${person}.I would like to ${verb} them with a ${noun}`   
}

function getButton (){
    return document.getElementById("lib-button")
}













