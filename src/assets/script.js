const studentArray = [['Temi', 60], ['Nikky', 48], ['Emeka', 98], ['Eze', 85], ['Osita', 75], ['Jerry', 68]]

const getAverage = (students) => {
    let totalScore = 0;
    let average, grade;
    students.forEach(student => {
        totalScore += student[1]
    })
    average = totalScore / students.length
    if (average < 60) {
        grade = 'F'
    } else if (average < 70) {
        grade = 'D'
    } else if (average < 80) {
        grade = 'C'
    } else if (average < 90) {
        grade = 'B'
    } else {
        grade = 'A'
    }

    console.log(`Average score: ${average}; Grade: ${grade}`)
}

const checkOddOrEven = () => {
    for (let i = 0; i <= 30; i++) {
        if (i % 2 == 0) {
            console.log(`${i} is even`)
        } else {
            console.log(`${i} is odd`)
        }
    }
}

const checkMultiples = () => {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(`${i} three_five`)
            sum += i;
        } else if (i % 3 == 0) {
            console.log(`${i} three's`)
        } else if (i % 5 == 0) {
            console.log(`${i} five's`)
        }
    }
}

const addMultiples = () => {
    let sum = 0;
    for (let i = 0; i <= 1000; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            sum += i;
        }
    } 
    console.log(sum)   
}

const alphaBetical = (tttt) => {
    let arr = tttt.toLowerCase.split('')
    arr.sort()
    console.log(arr.join(''))
}

const returnSecond = (arr) => {
    console.log(arr.sort().reverse()[0])
}

const checkOccurence = (streeng, keyword) => {
    let i = 0;
    let streenArray = streeng.split('')
    streenArray.forEach(letter => {
        if(letter === keyword){
            i++
        }
    })
    console.log(`${keyword} occurs ${i} times in ${streeng}`)
}

// same as above
const checkOccurence2 = (streeng, keyword) => {
    let i = 0;
    for(let index = 0; index < streeng.length; index++){
        if(streeng.charAt(index) === keyword) {
            i++
        }
    }
    console.log(`${keyword} occurs ${i} times in ${streeng}`)
}

const libraryReview = (harray) => {
    for (hobject of harray) {
        console.log(`the book ${hobject.title} with ID${hobject.id} and author ${hobject.author} ${hobject.readingStatus === true ? 'has been' : 'has not been'} read`)
    }
}

const library = [ 
    {
        id: '001',
        title: 'Things Fall Apart',
        author: 'James Jackson',
        readingStatus: true
    },
    {
        id: '002',
        title: 'Tempest',
        author: 'Walter Isaacson',
        readingStatus: false
    },
    {
        id: '003',
        title: 'Satan Get Lost',
        author: 'John Doe',
        readingStatus: false
    },
    {
        id: '004',
        title: 'Dating My Bully',
        author: 'James Brown',
        readingStatus: true
    },
    {
        id: '005',
        title: 'The Hooded Figure',
        author: 'Suzanne Collins',
        readingStatus: true
    }
];

const randomize = (word, n) => {
    word = word.split('')
    for(let i = 0; i < word.length; i++) {
        n = 1
       console.log(word[i])
       let newWord = [...word]
       let removedLetter = newWord.splice(i,n)
       
       for(let j = 0; j < newWord.length; j++){
        console.log(`${removedLetter.join('')}${newWord[j]}`)
       }
       
       if(newWord.length > 0){
            n++
            randomize(word.join(''), n)
       }
    }
}

randomize('father')

// promises
const myPromise = new Promise((resolve,reject) => {
    let sum = 5+5
    if (sum == 10){
        resolve('success')
    }else{
        reject('failed')
    }
})

myPromise.then(response =>{
    console.log(`promiseddddd ${response}`)
}).catch(error => {
    console.log(0)
})

