const mas = [1, 2, 3, 4, 6, 8, 9, 12, 13, 14, 16, 18, 20]
let start = 0
let end = mas.length
let midle;

function searchItemIndex(mas, item) {
	while (true) {
  	midle = Math.floor((start + end) / 2)
    if (mas[midle] === item) {
    	return midle
    }

    if (item < mas[midle]) {
    	end = midle - 1
    } else {
    	start = midle + 1
    }
  }
}
