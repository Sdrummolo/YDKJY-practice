// Define a slot machine with three reels that can individually spin(), and then display() the current contents of all the reels.
// The basic behavior of a single reel is defined in the reel object below. But the slot machine needs individual reels—objects that delegate to reel, and which each have a position property.
// A reel only knows how to display() its current slot symbol, but a slot machine typically shows three symbols per reel: the current slot (position), one slot above (position - 1), and one slot below (position + 1). So displaying the slot machine should end up displaying a 3 x 3 grid of slot symbols.

function randMax(max) {
  return Math.trunc(1e9 * Math.random()) % max
}

var reel = {
  symbols: ["♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"],

  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1)
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length
  },

  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1)
    }
    return this.symbols[this.position]
  },
}

var slotMachine = {
  reels: [Object.create(reel), Object.create(reel), Object.create(reel)],

  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin()
    })
  },

  display() {
    let lines = []
    let tempIndex = -1

    for (let i = 0; i < 3; i++) {
      let line = []

      this.reels.forEach(reel => {
        let newIndex = reel.position + tempIndex

        if (newIndex == 8) newIndex = 0
        if (newIndex == -1) newIndex = 7

        line.push(reel.symbols[newIndex])
        if (line.length < 5) {
          line.push("|")
        }
      })

      lines.push(line)
      tempIndex++
    }

    lines.forEach(line => {
      console.log(line)
    })
  },
}

slotMachine.spin()
slotMachine.display()
