const header = document.querySelector('header')
const section = document.querySelector('section')

const requestURL = 'https://semegenkep.github.io/json/example.json'
const request = new XMLHttpRequest()
request.open('GET', requestURL)

request.responseType = 'json'
request.send()

request.onload = function(){
    const superHeroes = request.response
    populateHeader(superHeroes)
    showHeroes(superHeroes)
}

function populateHeader(superHeroes){
    const headerName = document.createElement('h1')
    headerName.innerText = superHeroes.squadName
    const headerCity = document.createElement('p')
    headerCity.className = 'headerCity'
    headerCity.innerText = `Hometown: ${superHeroes.homeTown} // Formed: ${superHeroes.formed}`

    header.append(headerName)
    header.append(headerCity)
}

function showHeroes(superHeroes){
    for (let i = 0; i < 3; i++){
        const sectionHero = document.createElement('article')
        sectionHero.className = 'sectionHero'
        section.append(sectionHero)
    
        const sectionHeroName = document.createElement('h2')
        sectionHeroName.innerText = superHeroes.members[i].name
        sectionHero.append(sectionHeroName)
    
        const secretIdentity = document.createElement('p')
        secretIdentity.innerText = `Secret identity: ${superHeroes.members[i].secretIdentity}`
        sectionHero.append(secretIdentity)

        const age = document.createElement('p')
        age.innerText = `Secret identity: ${superHeroes.members[i].age}`
        sectionHero.append(age)

        const superpowers = document.createElement('p')
        superpowers.innerText = `Superpowers:`
        sectionHero.append(superpowers)

        const superpowersList = document.createElement('ul')
        for (let j = 0; j < superHeroes.members[i].powers.length; j++){
            const superpower = document.createElement('li')
            superpower.innerText = superHeroes.members[i].powers[j]
            superpowersList.append(superpower)
        }
        sectionHero.append(superpowersList)
    }
}