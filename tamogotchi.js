let mealstate = ''
let energystate = ''
let moodstate = ''
let thirststate = ''
const tamogotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,
    thirst: 2,
    getStatus(){
     if(this.meal < 3){
       mealstate = 'Я голоден'
     }
      if(this.meal >= 3){
        mealstate = 'я не голоден'
      }
      if(this.thirst < 3){
        thirststate = 'Я хочу пить'
      }
      if(this.thirst >= 3){
        thirststate = 'Я больше не хочу пить'
      }
      if(this.energy < 3){
        energystate = 'я хочу спать'
      }
      if(this.energy >= 3){
         energystate = 'я не хочу  спать'
      }
      if(this.mood < 3){
        moodstate = 'мне скучно'
      }
      if(this.mood >= 3){
        moodstate = 'мне весело'
      }
if(this.meal <= 0 || this.energy <= 0 || this.mood <= 0){
              return console.log(`${this.name}: DIE`)
        }
if(this.meal >= 5 && this.energy >= 5 && this.mood >= 5 && this.thirst >= 5){
         return console.log(`${this.name}: RAGE-MODE(Invulnerable)`)
      }
       
      let meal = 'Еда:'
      let energy = 'Энергия:'
      let mood = 'Настроение:'
      let thirst = 'Жажда:'
  console.log(`Имя: ${this.name}, ${meal} ${mealstate}(${this.meal}), ${thirst} ${thirststate} (${this.thirst}) ${energy} ${energystate} (${this.energy}), ${mood} ${moodstate} (${this.mood}),`)
        
    },
    setName(name){
        this.name = name;
    },
    setEat(){
    if(this.meal <= 5 || this.mood <= 5){
        this.meal++
        this.mood--
      
      }
    },
    toSleep(){
  if(this.energy <= 5 || this.meal <= 5){
        this.energy++
        this.meal--
        
      }
    },
  toPlay(){
  if(this.mood <= 5 || this.energy <= 5 || this.thirst <= 5){
        this.mood++
        this.energy--
        this.thirst--
    }
    },
  toDrink(){
    if(this.thirst <= 5 || this.energy <= 5){
      this.thirst++
      this.energy++
      this.meal++
      this.mood++
    }
  }
  }
tamogotchi.setName('person')
tamogotchi.setEat()
tamogotchi.setEat()
tamogotchi.setEat()
tamogotchi.toSleep()
tamogotchi.toPlay()
tamogotchi.toDrink()
tamogotchi.toDrink()
tamogotchi.toDrink()
tamogotchi.toDrink()
tamogotchi.toPlay()
tamogotchi.getStatus()
