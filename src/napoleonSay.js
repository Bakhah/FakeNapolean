import { followFrequency } from './data/followFrequency'
import { firstLetterFrequency } from './data/firstLetterFrequency'



export const words = (nbWords) => {
  let res = ""
  let firstLetter = findRandomFirstLetter()
  res += firstLetter
  let previousLetter = firstLetter
  for (var i = 0; i < nbWords - 1; i++) {
    let newLetter = findRandomFollowerFor(previousLetter)
    previousLetter = newLetter
    res += previousLetter
  }
  return res
}

export const sentence = () => {
  let res = ""
  let random = Math.round(Math.random() * 30) + 1
  for (var i = 0; i < random; i++) {
    let randomWord = Math.round(Math.random() * 10) + 2
    res += words(randomWord) + " "
  }

  return res
}

const findRandomFirstLetter = () => {
  let random = Math.random() * 100
  let cumulated = 0
  let found = false
  let res = ""

  Object.keys(firstLetterFrequency).map((key) => {
    cumulated += firstLetterFrequency[key]
    if (cumulated > random && !found) {
      res = key
      found = true
    }
  })
  return res
}

const findRandomFollowerFor = (letter) => {
  let random = Math.random() * 100
  let cumulated = 0
  let found = false
  let res = ""
  if (followFrequency[letter]) {
    Object.keys(followFrequency[letter]).map((key) => {
      cumulated += followFrequency[letter][key]
      if (cumulated > random && !found) {
        if (key == " ") {
          res = findRandomFollowerFor(letter)
        }
        else {
          res = key
        }
        found = true
      }
    })
  }
  else {
    res = findRandomFirstLetter()
  }
  return res
}



export const test = () => {
  let total = 0
  let res = "{"
  Object.keys(firstLetterFrequency).map((key) => {
    total += firstLetterFrequency[key]
  })

  Object.keys(firstLetterFrequency).map((key) => {
      res += "\""+key+"\": " + (firstLetterFrequency[key] / total * 100).toFixed(5) + ","
  })
  res += "}"
  return res
}
